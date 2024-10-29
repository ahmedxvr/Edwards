export default {
    name: 'story',
    title: 'Story',
    type: 'document',
    fields: [
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'storyCategory' }],
            validation: Rule => Rule.required(),
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'blurb',
            title: 'Blurb',
            type: 'text',
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'figure',
            validation: Rule => Rule.required(),
        },
        {
            name: 'video',
            title: 'Video',
            type: 'url',
            validation: Rule => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            description: 'for anchor scrolling',
            type: 'slug',
            options: {
                source: "heading",
                maxLength: 96,
            },
        },
    ],
}