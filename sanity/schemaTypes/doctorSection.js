import { defineType, defineField } from "sanity";

export default defineType({
  name: "doctorSection",
  title: "Doctor Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "paragraph",
      title: "Paragraph",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
