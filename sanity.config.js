'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schemaTypes'
import { structure } from './sanity/structure'

/** 🔹 Custom Navbar with Clemens blue */
function ClemensNavbar(props) {
  return (
    <div
      style={{
        background: '#2C2E74', // Solid Clemens blue
        padding: '0.5rem 1rem',
      }}
    >
      {props.renderDefault(props)}
    </div>
  )
}

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,

  name: 'clemensStudio',
  title: 'Clemens Studio',

  schema,

  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  studio: {
    components: {
      navbar: ClemensNavbar, // replaces orange header
    },
  },
})
