export default {
    name: 'symptomCard',
    title: 'Symptom card',
    type: 'object',
    fields: [
        {
            name: 'icon',
            title: 'Icon',
            type: 'figure',
            validation: Rule => Rule.required(),
        },
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
            subheading: 'subheading',
            icon: 'icon',
        },
        prepare(selection) {
            const { heading, subheading, icon } = selection
            return {
                title: heading,
                subtitle: subheading,
                media: icon,
            }
        }
    }
}