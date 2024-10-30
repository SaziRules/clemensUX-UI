import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'ratingImage',
      title: 'Rating image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'productCategory'}}],
    }),

    defineField({
        name: 'summary',
        title: 'Product Summary',
        type: 'text',
      }),
    
    defineField({
      name: 'description',
      title: 'Product Description',
      type: 'blockContent',
    }),
  ],
})
