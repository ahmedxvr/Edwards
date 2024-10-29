export default {
  name: 'settingsFooter',
  title: 'Settings footer',
  type: 'document',
  fields: [
    {
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      of: [{ type: 'pageLink' }, { type: 'pageAnchorLink' }, { type: 'externalLink' }],
    },
    {
      name: 'address',
      title: 'Address',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{ type: 'svgLink' }],
    },
  ],
};
