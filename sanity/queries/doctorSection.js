import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function getDoctorSection() {
  return client.fetch(
    groq`*[_type == "doctorSection"][0] {
      title,
      paragraph,
      buttonText,
      "image": image.asset->url
    }`
  );
}
