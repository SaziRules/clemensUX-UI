import { defineType, defineField } from "sanity";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "logoAlt",
      title: "Logo Alt Text",
      type: "string",
    }),
    defineField({
      name: "companyText",
      title: "Company Text",
      type: "text",
    }),
    defineField({
      name: "quickLinks",
      title: "Quick Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Name" },
            { name: "url", type: "string", title: "URL" },
          ],
        },
      ],
    }),
    defineField({
      name: "moreLinks",
      title: "More Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Name" },
            {
              name: "file",
              type: "file",
              title: "Upload File (PDF, etc.)",
              options: { accept: ".pdf,.doc,.docx" },
            },
            {
              name: "url",
              type: "string",
              title: "External URL (optional)",
              description: "Use this if you don’t upload a file",
            },
          ],
        },
      ],
    }),
    defineField({ name: "email", type: "string", title: "Email" }),
    defineField({ name: "phone", type: "string", title: "Phone" }),
    defineField({ name: "address", type: "text", title: "Address" }),
    defineField({
      name: "social",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "facebook", type: "url", title: "Facebook" },
        { name: "twitter", type: "url", title: "Twitter" },
        { name: "instagram", type: "url", title: "Instagram" },
        { name: "tiktok", type: "url", title: "TikTok" },
        { name: "linkedin", type: "url", title: "LinkedIn" },
        
      ],
    }),
  ],
});
