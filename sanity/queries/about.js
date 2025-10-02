import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function getAboutSections() {
  return client.fetch(
    groq`*[_type == "aboutSection"] | order(order asc) {
      _id,
      title,
      body
    }`
  );
}
