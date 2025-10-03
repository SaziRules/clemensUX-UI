// sanity/env.js
const assert = (v, msg) => {
  if (!v) throw new Error(msg)
  return v
}

// Public (safe for browser)
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-10-01'
export const dataset   = assert(process.env.NEXT_PUBLIC_SANITY_DATASET, 'Missing NEXT_PUBLIC_SANITY_DATASET')
export const projectId = assert(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 'Missing NEXT_PUBLIC_SANITY_PROJECT_ID')

// Private (server-only)
export const token  = process.env.SANITY_API_TOKEN || undefined

// Use the CDN if you don’t need drafts (i.e., no token)
export const useCdn = !token
