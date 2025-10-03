// sanity/lib/client.js
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn, token } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,                     // true when no token (fast CDN)
  token,                      // ONLY present on server
  perspective: token ? 'previewDrafts' : 'published',
});
