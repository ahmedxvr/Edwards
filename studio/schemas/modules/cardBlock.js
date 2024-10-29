import { BsCardText } from 'react-icons/bs'

export default {
    name: 'cardBlock',
    title: 'Card block',
    type: 'object',
    icon: BsCardText,
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'subheading',
            title: 'Subheading',
            type: 'text',
        },
        {
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [{ type: 'iconCard' }],
        },
        {
            name: 'config',
            title: 'Module Config',
            type: 'moduleSettings',
        },
    ],
    prepare({ heading, subheading }) {
        return {
            title: `${heading}`,
            subtitle: `${subheading}`,
        };
    },
}