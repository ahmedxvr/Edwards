export default {
  name: 'anchorLinkGroup',
  title: 'Anchor Link Group',
  type: 'object',
  fields: [
    {
      name: 'anchorLinks',
      title: 'Anchor Links',
      type: 'array',
      of: [{ type: 'anchorLink' }],
      validation: (Rule) => Rule.required().min(1).max(2),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Anchor Link Group',
      };
    },
  },
};
