import { BsFillChatLeftQuoteFill } from "react-icons/bs";

export default {
  name: "quoteBlock",
  title: "Quote block",
  type: "object",
  icon: BsFillChatLeftQuoteFill,
  fields: [
    {
      name: "quote",
      type: "text",
      description: "Quotation marks will be added automatically.",
    },
    {
      name: "author",
      type: "string",
    },
    {
      name: "authorTitle",
      type: "string",
    },
    {
      name: "image",
      type: "figure",
    },
    {
      name: "config",
      title: "Module Config",
      type: "moduleSettings",
    },
  ],
  preview: {
    select: {
      media: "image",
      author: "author",
    },
    prepare({ author, media }) {
      return {
        title: "Quote Block",
        subtitle: author,
        media,
      };
    },
  },
};
