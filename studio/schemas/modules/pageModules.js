export default {
  name: 'pageModules',
  title: 'Page modules',
  type: 'object',
  fields: [
    {
      name: 'modules',
      type: 'array',
      of: [
        { type: 'pageBanner' },
        { type: 'imageText' },
        { type: 'singleColText' },
        { type: 'twoColText' },
        { type: 'cardGrid' },
        { type: 'soundCards' },
        { type: 'videoBlock' },
        { type: 'cardBlock' },
        { type: 'storyBlock' },
        { type: 'halfBanner' },
        { type: 'accordionSet' },
        { type: 'formBlock' },
        { type: 'quoteBlock' },
        { type: 'journeyPopup' },
        { type: 'echoLocationBlock' },
      ],
    },
  ],
};
