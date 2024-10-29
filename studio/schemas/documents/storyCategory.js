import {
    orderRankField,
    orderRankOrdering,
} from '@sanity/orderable-document-list';

import { IoMdRadioButtonOn } from 'react-icons/io'

export default {
    name: 'storyCategory',
    title: 'Story category',
    type: 'document',
    orderings: [orderRankOrdering],
    icon: IoMdRadioButtonOn,
    fields: [
        orderRankField({ type: 'category' }),
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
    ],
}