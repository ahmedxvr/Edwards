import { TiBusinessCard } from 'react-icons/ti'

export default {
    name: 'iconCard',
    title: 'Card',
    type: 'object',
    icon: TiBusinessCard,
    fields: [
        {
            name: 'text',
            title: 'Text',
            type: 'simplePortableText',
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'figure',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'array',
            of: [{ type: 'externalLink' }, { type: 'pageLink' }],
            validation: Rule => [
                Rule.max(1)
                    .error('Required field with 1 entry.'),
            ]
        },
    ],
    preview: {
        select: {
            image: 'icon',
        },
        prepare({ image }) {
            return {
                title: 'Icon card',
                media: image || TiBusinessCard,
            }
        }
    }
}