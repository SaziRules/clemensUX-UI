// sanity/schemaTypes/product.js
export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
    },
    { name: "summary", title: "Summary", type: "text" },
    { name: "description", title: "Description", type: "text" },
    {
      name: "size",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "sizeGuide",
      title: "Size Guide",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "units",
      title: "Units Per Case",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "image", title: "Thumbnail Image", type: "image" },
    { name: "mainImage", title: "Main Image", type: "image" },
  ],
};
