import S from '@sanity/desk-tool/structure-builder';

import {
  Gear,
  NavigationArrow,
  Shuffle,
  InstagramLogo,
  Rectangle
} from 'phosphor-react';

export const settingsMenu = S.listItem()
  .title('Settings')
  .child(
    S.list()
      .title('Settings')
      .items([
        // Navigation
        S.listItem()
          .title('Navigation')
          .child(
            S.document()
              .title('Nav Settings')
              .id('settingsNav')
              .documentId('settingsNav')
              .schemaType('settingsNav')
          )
          .icon(NavigationArrow),
        // Navigation
        S.divider(),
        S.listItem()
          .title('Footer Settings')
          .child(
            S.document()
              .title('Footer Messages')
              .id('settingsFooter')
              .documentId('settingsFooter')
              .schemaType('settingsFooter')
          )
          .icon(Rectangle),
        S.divider(),

        // Redirects
        S.listItem()
          .title('Redirects')
          .child(S.documentTypeList('redirect').title('Redirect'))
          .icon(Shuffle),
      ])
  )
  .icon(Gear);
