import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'productCategory',
  title: 'Product Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Category',
      type: 'string',
    }),
    
  ],
})
