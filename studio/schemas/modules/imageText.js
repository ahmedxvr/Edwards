import { BiImage } from 'react-icons/bi';

export default {
  name: 'imageText',
  title: 'Image text',
  type: 'object',
  icon: BiImage,
  fields: [
    {
      name: 'text',
      type: 'simplePortableText',
    },
    {
      name: 'image',
      type: 'figure',
    },
    {
      name: 'layout',
      type: 'position',
      options: {
        choices: ['left', 'right'],
      },
    },
    {
      name: 'hasSharpBorder',
      title: 'Has sharp border',
      type: 'boolean',
    },
    {
      name: 'config',
      title: 'Module Config',
      type: 'moduleSettings',
    },
  ],
  preview: {
    select: {
      media: 'image',
      blocks: 'text',
    },
    prepare({ blocks, media }) {
      const block = (blocks || []).find((block) => block._type === 'block');
      return {
        title: 'Image Text Block',
        subtitle: block
          ? block.children
              .filter((child) => child._type === 'span')
              .map((span) => span.text)
              .join('')
          : 'No title',
        media,
      };
    },
  },
};
