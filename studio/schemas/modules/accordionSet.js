import { FiChevronDown } from 'react-icons/fi'

export default {
  name: 'accordionSet',
  title: 'Accordion set',
  type: 'object',
  icon: FiChevronDown,
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'items',
      type: 'array',
      of: [{ type: 'textSection' }],
    },
    {
      name: 'config',
      title: 'Module Config',
      type: 'moduleSettings',
    },
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare({ title, items }) {
      return {
        title: 'Accordion set',
        subtitle: title,
        media: items && items.length ? items[0].image : null,
      };
    }
  }
};
