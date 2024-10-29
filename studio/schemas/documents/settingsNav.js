export default {
  name: "settingsNav",
  title: "Settings nav",
  type: "document",
  fields: [
    {
      name: "mainMenu",
      type: "array",
      of: [{ type: "pageLink" }],
    },
    {
      name: "dropdownMenuTitle",
      type: "string",
    },
    {
      name: "dropdownMenu",
      type: "array",
      of: [{ type: "pageLink" }],
    },
  ],
};
