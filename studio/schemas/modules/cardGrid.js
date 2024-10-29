import { MdOutlineSick } from "react-icons/md";

export default {
  name: "cardGrid",
  title: "Card grid",
  type: "object",
  icon: MdOutlineSick,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "string",
    },
    {
      name: "cards",
      title: "Cards",
      type: "array",
      of: [{ type: "symptomCard" }],
    },
    {
      name: "config",
      title: "Module Config",
      type: "moduleSettings",
    },
  ],
  preview: {
    select: {
      heading: "heading",
      subheading: "subheading",
    },
    prepare(selection) {
      const { heading, subheading } = selection;
      return {
        title: heading,
        subtitle: subheading,
      };
    },
  },
};
