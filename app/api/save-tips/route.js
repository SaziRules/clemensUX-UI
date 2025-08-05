import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const data = await req.json(); // data sent from Tina (full tips array)
    const tipsFile = path.join(process.cwd(), "json", "tips.json");

    fs.writeFileSync(tipsFile, JSON.stringify(data, null, 2), "utf8");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error saving tips:", err);
    return new Response(JSON.stringify({ error: "Failed to save tips" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
