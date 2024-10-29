export default {
    name: 'externalLink',
    title: 'External link',
    type: 'object',
    fields: [
        {
            name: 'linkText',
            title: 'Link text',
            type: 'string',
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
    ],
    preview: {
        select: {
            linkText: 'linkText',
        },
        prepare({ linkText }) {
            return {
                title: linkText,
            }
        }
    }
}