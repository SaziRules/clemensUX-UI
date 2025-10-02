import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function getSubscriberContent() {
  return client.fetch(
    groq`*[_type == "subscriber"][0]{
      heading,
      buttonText,
      "imageUrl": image.asset->url
    }`
  );
}
