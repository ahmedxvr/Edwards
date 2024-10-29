import S from '@sanity/desk-tool/structure-builder';

import { settingsMenu } from './desk/settings';
import { pageMenu } from './desk/pages';
import { storyMenu } from './desk/stories';
import { standardViews } from './desk/views/standard';

const hiddenDocTypes = (listItem) =>
  ![
    'settingsNav',
    'redirect',
    'homePage',
    'modularPage',
    'simplePage',
    'productModules',
    'settingsFooter',
    'settingsSocial',
    'media.tag', // for media plugin
    'blog',
    'blogPortal',
    'storyCategory',
    'story',
  ].includes(listItem.getId());

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (['homePage'].includes(schemaType)) {
    return S.document().views(standardViews);
  }
  return S.document().views([S.view.form()]);
};

export default () =>
  S.list()
    .title('Content')
    .items([
      settingsMenu,
      S.divider(),
      pageMenu,
      S.divider(),
      storyMenu,
      // Filter out docs already defined above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
