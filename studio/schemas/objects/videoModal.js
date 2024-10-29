export default {
  name: 'videoModal',
  title: 'Video Modal',
  type: 'object',
  fields: [
    {
      name: 'linkText',
      title: 'Link text',
      type: 'string',
    },
    {
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
    },
  ],
  preview: {
    select: {
      linkText: 'linkText',
    },
    prepare({ linkText }) {
      return {
        title: linkText,
      };
    },
  },
};
