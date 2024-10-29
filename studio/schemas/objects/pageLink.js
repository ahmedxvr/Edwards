export default {
  name: 'pageLink',
  title: 'Doc link',
  type: 'object',
  fields: [
    {
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'page',
      type: 'pageReference',
    },
  ],
};
