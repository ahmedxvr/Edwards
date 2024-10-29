export default {
  name: "formBlock",
  title: "Form block",
  type: "object",
  fields: [
    {
      name: "formText",
      title: "Form text",
      type: "simplePortableText",
    },
    {
      name: "formImage",
      title: "Form image",
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
      media: "formImage",
      blocks: "formText",
    },
    prepare({ blocks, media }) {
      const block = (blocks || []).find((block) => block._type === "block");
      return {
        title: "Form Block",
        subtitle: block
          ? block.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "No title",
        media,
      };
    },
  },
};
