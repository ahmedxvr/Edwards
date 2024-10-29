export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
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
};
