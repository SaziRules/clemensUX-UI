import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function getContact() {
  return client.fetch(
    groq`*[_type == "contact"][0]{
      officeTitle,
      officeAddress,
      carelineTitle,
      carelineContent,
      writeTitle,
      writeAddress
    }`
  );
}
