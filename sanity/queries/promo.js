import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function getPromoSection() {
  return client.fetch(
    groq`*[_type == "promoSection"][0] {
      heading,
      buttonText,
      buttonLink,
      "image": image.asset->url
    }`
  );
}
