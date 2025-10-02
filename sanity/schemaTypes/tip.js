import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'tip',
  title: 'Health Tips',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Optional short teaser for previews',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      description: 'Main paragraph (introductory copy)',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'tipTitle',
      title: 'Tip Titles',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'tips',
      title: 'Tips',
      type: 'array',
      of: [{ type: 'text' }],
    }),
  ],
})
