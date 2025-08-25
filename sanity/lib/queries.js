// sanity/lib/queries.js
import { groq } from "next-sanity";

export const allProductsQuery = groq`*[_type == "product"]{
  _id,
  name,
  "slug": slug.current,
  summary,
  description,
  size,
  sizeGuide,
  features,
  units,
  "image": image.asset->url,
  "mainImage": mainImage.asset->url
}`;

export const singleProductQuery = groq`*[_type == "product" && slug.current == $slug][0]{
  _id,
  name,
  "slug": slug.current,
  summary,
  description,
  size,
  sizeGuide,
  features,
  units,
  "image": image.asset->url,
  "mainImage": mainImage.asset->url
}`;
