import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

// Fetch all features
export async function getAllFeatures() {
  return client.fetch(
    groq`*[_type == "feature"] | order(_createdAt desc) {
      _id,
      title,
      description,
      "imageUrl": image.asset->url
    }`
  );
}
