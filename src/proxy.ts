import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

/** Routes that do NOT require authentication. */
const isPublicRoute = createRouteMatcher([
  "/", // main marketing landing page
  "/client-risk-detector(.*)", // feature sub-page
  "/scope-guard(.*)", // feature sub-page
  "/sign-in(.*)", // Clerk hosted / custom sign-in
  "/sign-up(.*)", // Clerk hosted / custom sign-up
  "/api/webhooks(.*)", // Clerk + Stripe webhooks (no auth header)
]);

export default clerkMiddleware(async (auth, req) => {
  // Every route that is NOT public is automatically protected.
  // auth.protect() redirects unauthenticated users to the sign-in page.
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files.
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes.
    "/(api|trpc)(.*)",
  ],
};
