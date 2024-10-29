export default {
    name: "blogPortal",
    title: "Blog Portal",
    type: "document",
    groups: [
      {
        name: "settingsTab",
        title: "Page Settings",
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
          subtitle: "Blog Portal",
        };
      },
    },
  };
  