export default {
  name: 'figure',
  title: 'Figure',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      description: 'Important for SEO and accessiblity.',
    },
  ],
  preview: {
    select: {
      asset: 'asset',
      alt: 'alt',
    },
    prepare({ alt, asset }) {
      return {
        title: alt || '(alt text missing)',
        media: asset,
      };
    },
  },
};
