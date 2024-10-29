export default {
  name: "moduleSettings",
  title: "Module Settings",
  type: "object",
  options: {
    collapsible: true,
    columns: 2,
  },
  fields: [
    {
      name: "paddingTop",
      title: "Padding Top",
      type: "string",
      options: {
        list: [
          { value: "small", title: "Small" },
          { value: "medium", title: "Medium" },
          { value: "large", title: "Large" },
        ],
      },
    },
    {
      name: "paddingBottom",
      title: "Padding Bottom",
      type: "string",
      options: {
        list: [
          { value: "small", title: "Small" },
          { value: "medium", title: "Medium" },
          { value: "large", title: "Large" },
        ],
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Used for anchor Scrolling",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      title: "Module Colour",
      description: "Background Colour of the module",
      name: "moduleColor",
      type: "colorlist", // required
      options: {
        list: [
          { title: "Grey", value: "#E9EEF0" },
          { title: "White", value: "white" },
        ]
      }
    },
  ],
};
