import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

// For lists/carousels
export async function getAllPosts() {
  return client.fetch(groq`
    *[_type == "post"] | order(_createdAt desc){
      _id,
      title,
      "slug": slug.current,
      excerpt,
      // prefer thumbnail (image), then mainImage
      "thumbUrl": coalesce(image.asset->url, mainImage.asset->url)
    }
  `);
}

// Single post
export async function getPostBySlug(slug) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      excerpt,
      author,
      features,
      // prefer mainImage, fall back to thumbnail
      "mainImage": coalesce(mainImage.asset->url, image.asset->url),
      body[]{
        ...,
        _type == "image" => {
          ...,
          asset->{
            _id,
            url
          }
        }
      }
    }`,
    { slug }
  );
}
