import { BiRectangle } from 'react-icons/bi'

export default {
    name: 'halfBanner',
    title: 'Short Image Banner',
    type: 'object',
    icon: BiRectangle,
    fields: [
        {
            name: 'text',
            title: 'Text',
            type: 'simplePortableText',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'figure',
            validation: Rule => Rule.required(),
        },
    ],
    preview: {
        select: {
            image: 'image',
        },
        prepare({ text, image }) {
            return {
                title: 'Image Banner',
                media: image,
            }
        }
    }
}