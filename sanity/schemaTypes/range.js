import { defineType, defineField } from "sanity";

export default defineType({
  name: "range",
  title: "Range Card",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
      description: "Path or external link (e.g. /products or https://...)",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
