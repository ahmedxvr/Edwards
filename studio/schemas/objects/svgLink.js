import { FaInternetExplorer } from 'react-icons/fa';

export default {
    name: 'svgLink',
    title: 'Svg link',
    type: 'object',
    icon: FaInternetExplorer,
    fields: [
        {
            name: 'icon',
            title: 'Icon',
            type: 'figure',
            validation: Rule => Rule.required(),
        },
        {
            name: 'url',
            title: 'Url',
            type: 'url',
            validation: Rule => Rule.required(),
        },
    ],
    preview: {
        select: {
            subtitle: 'url',
            icon: 'icon',
        },
        prepare({ subtitle, icon }) {
            return {
                title: 'Social Media Link',
                subtitle: subtitle,
                media: icon,
            };
        }
    }
}