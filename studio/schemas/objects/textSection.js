import { BsTextIndentLeft } from 'react-icons/bs'

export default {
  name: 'textSection',
  title: 'Text section',
  type: 'object',
  icon: BsTextIndentLeft,
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'text',
      type: 'simplePortableText',
    },
  ],
};
