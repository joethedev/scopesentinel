/**
 * Clerk webhook handler — /api/webhooks/clerk
 *
 * Listens for Clerk user lifecycle events and syncs them to Supabase.
 * Supports: user.created, user.updated, user.deleted
 *
 * Setup:
 *  1. In your Clerk dashboard → Webhooks → Add endpoint:
 *       URL: https://your-domain.com/api/webhooks/clerk
 *       Events: user.created, user.updated, user.deleted
 *  2. Copy the "Signing Secret" into CLERK_WEBHOOK_SECRET in .env.local
 */
import { headers } from "next/headers";
import { Webhook } from "svix";
import type { WebhookEvent } from "@clerk/nextjs/server";
import { syncUserToSupabase } from "@/lib/user-sync";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return new Response("CLERK_WEBHOOK_SECRET is not set", { status: 500 });
  }

  // Verify the Svix signature
  const headerPayload = await headers();
  const svixId = headerPayload.get("svix-id");
  const svixTimestamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Missing Svix headers", { status: 400 });
  }

  const body = await req.text();
  const wh = new Webhook(webhookSecret);
  let event: WebhookEvent;

  try {
    event = wh.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as WebhookEvent;
  } catch {
    return new Response("Invalid webhook signature", { status: 400 });
  }

  // Handle events
  switch (event.type) {
    case "user.created":
    case "user.updated": {
      const { id, email_addresses, first_name, last_name, image_url } =
        event.data;
      const primaryEmail =
        email_addresses.find(
          (e) => e.id === event.data.primary_email_address_id,
        )?.email_address ?? email_addresses[0]?.email_address;

      if (!primaryEmail) {
        return new Response("No email found on user", { status: 422 });
      }

      await syncUserToSupabase({
        clerkId: id,
        email: primaryEmail,
        fullName:
          [first_name, last_name].filter(Boolean).join(" ").trim() || null,
        avatarUrl: image_url ?? null,
      });
      break;
    }

    case "user.deleted": {
      const { id } = event.data;
      if (id) {
        const supabase = createSupabaseServerClient();
        await supabase.from("users").delete().eq("clerk_id", id);
      }
      break;
    }
  }

  return new Response("OK", { status: 200 });
}
