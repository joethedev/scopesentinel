/**
 * POST /api/parse-pdf
 * Accepts a multipart form upload with a single `file` field (PDF).
 * Returns { text: string } with the extracted plain text.
 */
import { auth } from "@clerk/nextjs/server";
import { PDFParse } from "pdf-parse";

export const runtime = "nodejs"; // pdf-parse requires Node.js runtime

const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return Response.json(
      { error: "Expected multipart/form-data" },
      { status: 400 },
    );
  }

  const file = formData.get("file");
  if (!(file instanceof File)) {
    return Response.json({ error: "No file provided." }, { status: 422 });
  }

  if (file.type !== "application/pdf") {
    return Response.json(
      { error: "Only PDF files are accepted." },
      { status: 415 },
    );
  }

  if (file.size > MAX_SIZE_BYTES) {
    return Response.json(
      { error: "File exceeds the 5 MB limit." },
      { status: 413 },
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    const parser = new PDFParse({ data: buffer });
    const { text } = await parser.getText();
    const cleaned = text
      .replace(/\r\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
    return Response.json({ text: cleaned });
  } catch {
    return Response.json(
      {
        error:
          "Could not extract text from this PDF. Try a text-based (non-scanned) file.",
      },
      { status: 422 },
    );
  }
}
