export default {
  name: 'pageAnchorLink',
  title: 'Page Anchor Link',
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
    {
      name: 'target',
      type: 'slug',
      description: 'This should match a block slug',
      validation: (Rule) => Rule.required(),
    },
  ],
};
