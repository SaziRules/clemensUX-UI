import { defineType, defineField } from "sanity";

export default defineType({
  name: "subscriber",
  title: "Subscriber Section",
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
      initialValue: "Subscribe",
    }),
    defineField({
      name: "image",
      title: "Background / Side Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
