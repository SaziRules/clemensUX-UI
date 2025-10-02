import { defineType, defineField } from "sanity";

export default defineType({
  name: "promoSection",
  title: "Promo Section",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string", // change from 'url' to 'string'
      description: "Supports internal routes like /products or external URLs",
    }),
    defineField({
      name: "image",
      title: "Promo Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
