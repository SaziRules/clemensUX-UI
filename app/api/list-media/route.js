import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  let files = [];
  try {
    files = await fs.readdir(uploadDir);
  } catch (e) {
    console.error("Error reading uploads directory:", e);
    return new Response(JSON.stringify([]), { status: 200 });
  }

  try {
    // Return array of media objects for TinaCMS
    const media = files.map(filename => ({
      id: `/uploads/${filename}`,
      type: "file",
      filename,
      directory: "",
      previewSrc: `/uploads/${filename}`,
    }));
    return new Response(JSON.stringify(media), { status: 200 });
  } catch (e) {
    console.error("Error mapping media files:", e);
    return new Response(JSON.stringify([]), { status: 200 });
  }
}
