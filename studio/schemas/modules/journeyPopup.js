import { BsBoxArrowUp } from 'react-icons/bs';

export default {
  name: 'journeyPopup',
  title: 'Journey Popup',
  type: 'object',
  icon: BsBoxArrowUp,
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'subtitle',
      type: 'string',
    },
    {
      name: 'mainImage',
      type: 'figure',
    },
    {
      name: 'steps',
      type: 'array',
      of: [{ type: 'journeyItem' }],
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
    },
    prepare({ title }) {
      return {
        title: 'Journey Popup',
        subtitle: title,
      };
    },
  },
};
