import { client } from "@/sanity/lib/client";

// Fetch a single product by slug
export async function getProductBySlug(slug) {
  return client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      "slug": slug.current,
      summary,
      description,
      size,
      sizeGuide,
      features,
      units,
      "mainImage": mainImage.asset->url
    }`,
    { slug }
  );
}

// Fetch all products (for listing / HardProducts)
export async function getAllProducts() {
  return client.fetch(
    `*[_type == "product"] | order(_createdAt desc) {
      _id,
      name,
      "slug": slug.current,
      summary,
      "image": mainImage.asset->url
    }`
  );
}
