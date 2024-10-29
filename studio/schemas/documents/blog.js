import { BsNewspaper } from 'react-icons/bs';

export default {
  name: "blog",
  title: "Blog Post",
  type: "document",
  icon: BsNewspaper,
  groups: [
    {
      name: "settingsTab",
      title: "Page Settings",
    },
    {
      name: "contentTab",
      title: "Content",
      default: true,
    },
    {
      name: "seoTab",
      title: "SEO",
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "settingsTab",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().warning(
          "Please generate slug, this is required to render the page"
        ),
      group: "settingsTab",
    },
    {
      name: 'pageConfig',
      title: 'Page Settings',
      type: 'pageSettings',
      group: 'settingsTab',
    },
    {
      name: 'feautuedImage',
      title: 'Featured Image',
      type: 'figure',
      validation: (Rule) => Rule.required(),
      group: 'settingsTab',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      group: 'settingsTab',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'settingsTab',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule) => Rule.required(),
      group: 'settingsTab',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'simplePortableText',
      validation: (Rule) => Rule.required(),
      group: 'contentTab',
    },
    {
      title: "SEO / Share Settings",
      name: "seo",
      type: "seo",
      group: "seoTab",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(values) {
      return {
        title: values.title,
        subtitle: "Blog Post",
      };
    },
  },
};
