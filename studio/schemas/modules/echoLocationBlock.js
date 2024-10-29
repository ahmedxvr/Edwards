import { BsFillPinMapFill } from 'react-icons/bs';

export default {
  name: 'echoLocationBlock',
  title: 'Echo location block',
  type: 'object',
  icon: BsFillPinMapFill,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subText',
      title: 'Text',
      type: 'text',
    },
    {
      name: 'config',
      title: 'Module Config',
      type: 'moduleSettings',
    },
  ],
  prepare({ heading }) {
    return {
      title: `${heading}`,
    };
  },
};
