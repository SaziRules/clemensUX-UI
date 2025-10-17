import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function getStorePartners() {
  return client.fetch(
    groq`*[_type == "storePartners"][0]{
      _id,
      heading,
      stores[] {
        name,
        url,
        "logo": logo.asset->{
          _id,
          url,
          metadata { dimensions, lqip }
        }
      }
    }`
  );
}
