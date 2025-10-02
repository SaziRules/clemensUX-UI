import { defineType, defineField } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({
      name: "officeTitle",
      title: "Office Title",
      type: "string",
    }),
    defineField({
      name: "officeAddress",
      title: "Office Address",
      type: "text",
    }),
    defineField({
      name: "carelineTitle",
      title: "Careline Title",
      type: "string",
    }),
    defineField({
      name: "carelineContent",
      title: "Careline Content",
      type: "text",
    }),
    defineField({
      name: "writeTitle",
      title: "Write Title",
      type: "string",
    }),
    defineField({
      name: "writeAddress",
      title: "Write Address",
      type: "text",
    }),
  ],
});
