// sanity/queries/tip.js
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'

// List (carousel/grid)
export async function getAllTips() {
  return client.fetch(groq`
    *[_type == "tip"] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      "image": coalesce(image.asset->url, mainImage.asset->url)
    }
  `)
}

// Single tip
export async function getTipBySlug(slug) {
  return client.fetch(groq`
    *[_type == "tip" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      body,
      author,
      "image": image.asset->url,
      "mainImage": mainImage.asset->url,
      tipTitle,
      tips
    }
  `, { slug })
}
