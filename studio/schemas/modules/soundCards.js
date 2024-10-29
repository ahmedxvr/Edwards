import { GiSoundWaves } from 'react-icons/gi'

export default {
    name: 'soundCards',
    title: 'Sound cards',
    type: 'object',
    icon: GiSoundWaves,
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [{ type: 'soundCard' }],
            validation: Rule => [
                Rule.required()
                    .min(2)
                    .max(2)
                    .error('Required field with 2 entries.'),
                Rule.unique()
            ]
        },
        {
            name: 'config',
            title: 'Module Config',
            type: 'moduleSettings',
        },
    ],
    preview: {
        select: {
            heading: 'heading',
        },
        prepare({ heading }) {
            return {
                title: heading,
            }
        }
    }
}