import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

// All ranges
export async function getAllRanges() {
  return client.fetch(
    groq`*[_type == "range"] | order(_createdAt asc) {
      _id,
      title,
      description,
      link,
      "image": image.asset->url
    }`
  );
}
