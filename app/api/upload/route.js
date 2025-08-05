import { promises as fs } from "fs";
import path from "path";

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");
  if (!file) {
    return new Response(JSON.stringify({ error: "No file uploaded" }), { status: 400 });
  }

  // Get file buffer and name
  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}-${file.name}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  const filePath = path.join(uploadDir, filename);

  // Ensure upload directory exists
  await fs.mkdir(uploadDir, { recursive: true });
  await fs.writeFile(filePath, buffer);

  // Return public URL
  const url = `/uploads/${filename}`;
  return new Response(JSON.stringify({ url }), { status: 200 });
}
