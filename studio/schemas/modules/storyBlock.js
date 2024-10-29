import { BiBook } from 'react-icons/bi'

export default {
    name: 'storyBlock',
    title: 'Story block',
    type: 'object',
    icon: BiBook,
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'subheading',
            title: 'Subheading',
            type: 'string',
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