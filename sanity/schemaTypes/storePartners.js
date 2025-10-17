// /schemas/storePartners.js

import { defineType, defineField } from "sanity";

export default defineType({
  name: "storePartners",
  title: "Where to Buy Section",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Main heading displayed above the store logos (e.g. 'Get Clemens from your favourite home store')",
      validation: (Rule) => Rule.required().min(5),
    }),
    defineField({
      name: "stores",
      title: "Store Logos",
      type: "array",
      description: "List of stores with their logos and links",
      of: [
        defineField({
          name: "store",
          title: "Store",
          type: "object",
          fields: [
            {
              name: "name",
              title: "Store Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "logo",
              title: "Store Logo",
              type: "image",
              description: "Image dimensions should be approximately 400x200 pixels for optimal display.",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "url",
              title: "External Link",
              type: "url",
              description: "Direct link to the store page for Clemens products",
              validation: (Rule) =>
                Rule.uri({
                  scheme: ["http", "https"],
                }).required(),
            },
          ],
          preview: {
            select: {
              title: "name",
              media: "logo",
              subtitle: "url",
            },
          },
        }),
      ],
      validation: (Rule) => Rule.min(1).error("Add at least one store logo."),
    }),
  ],
  preview: {
    select: {
      title: "heading",
      stores: "stores",
    },
    prepare({ title, stores }) {
      return {
        title: title || "Untitled 'Where to Buy' Section",
        subtitle: `${stores?.length || 0} store(s) added`,
      };
    },
  },
});
