import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function getContactFormContent() {
  return client.fetch(
    groq`*[_type == "contactForm"][0]{
      heading,
      buttonText,
      "imageUrl": image.asset->url
    }`
  );
}
