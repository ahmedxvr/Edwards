import { GiSoundWaves } from 'react-icons/gi'

export default {
    name: 'soundCard',
    title: 'Sound card',
    type: 'object',
    icon: GiSoundWaves,
    fields: [
        {
            name: 'video',
            title: 'Video',
            type: 'file',
            validation: Rule => Rule.required(),
        },
    ],
    preview: {
        select: {
            image: 'image',
        },
        prepare(selection) {
            const { image } = selection
            return {
                title: 'Sound card',
                media: image,
            }
        }
    }
}