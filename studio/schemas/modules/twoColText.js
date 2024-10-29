import { FiColumns } from "react-icons/fi";

export default {
  name: "twoColText",
  title: "Two Column Text",
  type: "object",
  icon: FiColumns,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "leftText",
      title: "Left text",
      type: "simplePortableText",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rightText",
      title: "Right text",
      type: "simplePortableText",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "config",
      title: "Module Config",
      type: "moduleSettings",
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: "Two Column Text",
        subtitle: title,
      };
    },
  },
};
