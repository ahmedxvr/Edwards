import S from '@sanity/desk-tool/structure-builder';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

import {
    ListBullets,
    Heart,
    Book,
} from 'phosphor-react';

export const storyMenu = S.listItem()
    .title('Stories')
    .child(
        S.list()
            .title('Settings')
            .items([
                //story categories
                orderableDocumentListDeskItem({ type: 'storyCategory', icon: ListBullets, title: 'Story Categories' }),
                S.divider(),
                //stories
                S.listItem()
                    .title('Stories')
                    .child(S.documentTypeList('story').title('Story'))
                    .icon(Book),
                S.divider(),
            ])
    )
    .icon(Heart);
