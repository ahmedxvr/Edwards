import { TextAlignLeft } from 'phosphor-react';
export default {
  name: 'singleColText',
  title: 'Single Column Text',
  type: 'object',
  icon: TextAlignLeft,
  fields: [
    {
      name: 'text',
      type: 'simplePortableText',
    },
    {
      name: 'centerText',
      type: 'boolean',
      title: 'Center Text',
    },
    {
      name: 'config',
      title: 'Module Config',
      type: 'moduleSettings',
    },
  ],
  preview: {
    select: {
      blocks: 'text',
    },
    prepare({ blocks, media }) {
      const block = (blocks || []).find((block) => block._type === 'block');
      return {
        title: 'Single Column Text',
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
