import { Image } from "phosphor-react";
export default {
  name: "pageBanner",
  title: "Page banner",
  type: "object",
  icon: Image,
  fields: [
    {
      name: "image",
      type: "figure",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tint",
      title: "Dark Tint?",
      type: "boolean",
    },
    {
      name: "text",
      title: "Text",
      type: "simplePortableText",
    },
    {
      name: "redText",
      title: "Red Text?",
      type: "boolean",
    },
    {
      name: "buttonGroup",
      title: "Button Group",
      type: "boolean",
    },
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "color",
    },
  ],
  preview: {
    select: {
      media: "image",
    },
    prepare({ media }) {
      return {
        title: "Page Banner",
        media,
      };
    },
  },
};
