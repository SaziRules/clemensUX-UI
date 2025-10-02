import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function getFooterData() {
  return client.fetch(
    groq`*[_type == "footer"][0] {
      "logoUrl": logo.asset->url,
      logoAlt,
      companyText,
      quickLinks,
      moreLinks[]{
        name,
        "fileUrl": file.asset->url,
        url
      },
      email,
      phone,
      address,
      social
    }`
  );
}
