import { RiPagesLine } from 'react-icons/ri';

export default {
  name: "modularPage",
  title: "Modular Page",
  type: "document",
  icon: RiPagesLine,
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
      name: "modules",
      title: "Page Modules",
      type: "pageModules",
      description: "Add Modular Page Blocks here",
      group: "contentTab",
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
        subtitle: "Modular Page",
      };
    },
  },
};
