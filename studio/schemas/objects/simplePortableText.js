import React from 'react';

import { BsQuestionSquare } from 'react-icons/bs';

const highlightRender = (props) => (
  <span style={{ color: '#CE2E49' }}>{props.children}</span>
);

export default {
  name: 'simplePortableText',
  title: 'Simple Portable Text',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          {
            title: 'Highlight',
            value: 'highlight',
            blockEditor: {
              icon: () => 'H',
              render: highlightRender,
            },
          },
        ],
      },
    },
    {
      type: 'quizButton',
      title: 'Quiz',
      icon: BsQuestionSquare,
    },
    {
      type: 'figure',
      title: 'Image',
    },
    {
      type: 'pageLink',
    },
    {
      type: 'pageAnchorLink',
    },
    {
      type: 'anchorLinkGroup',
    },
    {
      type: 'anchorLink',
    },
    {
      type: 'videoModal',
    },
    {
      type: 'externalLink',
    },
  ],
};
