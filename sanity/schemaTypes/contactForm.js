import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactForm",
  title: "Contact Form Section",
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
      initialValue: "Send",
    }),
    defineField({
      name: "image",
      title: "Side Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
