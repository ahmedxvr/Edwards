import { FiVideo } from 'react-icons/fi';

export default {
    name: 'videoBlock',
    title: 'Video block',
    type: 'object',
    icon: FiVideo,
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
        {
            name: 'video',
            title: 'Video',
            type: 'url',
            validation: Rule => Rule.required(),
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'figure',
            validation: Rule => Rule.required(),
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