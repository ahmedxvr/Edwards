import { BsTextIndentLeft } from "react-icons/bs";

export default {
  name: "journeyItem",
  title: "Journey Item",
  type: "object",
  icon: BsTextIndentLeft,
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "content",
      type: "simplePortableText",
    },
    {
      name: "borderedText",
      type: "string",
    },
    {
      name: "graphic",
      type: "figure",
    },
  ],
};
