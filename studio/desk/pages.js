import S from '@sanity/desk-tool/structure-builder';

import { House, Layout, Browsers, Browser, Article, Circle } from 'phosphor-react';
import { standardViews } from './views/standard';

// Home Menu
const homeMenu = S.listItem()
  .title('Home')
  .child(
    S.document()
      .title('Home Page')
      .id('homePage')
      .documentId('homePage')
      .schemaType('homePage')
      .views(standardViews)
  )
  .icon(House);

//Modular Pages
const modulesMenu = S.listItem()
  .title('Modular Pages')
  .child(
    S.documentTypeList('modularPage')
      .title('Modular Pages')
      .canHandleIntent((intent) => intent == 'create' || intent == 'edit')
      .child((documentId) =>
        S.document().documentId(documentId).schemaType('modularPage').views(standardViews)
      )
  )
  .icon(Layout);

//Simple Pages
const simpleMenu = S.listItem()
  .title('Simple Pages')
  .child(
    S.documentTypeList('simplePage')
      .title('Simple Pages')
      .canHandleIntent((intent) => intent == 'create' || intent == 'edit')
      .child((documentId) =>
        S.document().documentId(documentId).schemaType('simplePage').views(standardViews)
      )
  )
  .icon(Browser);

//blog Pages
const blogMenu = S.listItem()
  .title('Blog Posts')
  .child(
    S.documentTypeList('blog')
      .title('Blog Posts')
      .canHandleIntent((intent) => intent == 'create' || intent == 'edit')
      .child((documentId) =>
        S.document().documentId(documentId).schemaType('blog').views(standardViews)
      )
  )
  .icon(Article);

//Blog Portal
const portalMenu = S.listItem()
  .title('Blog Portal')
  .child(
    S.document()
      .title('Blog Portal')
      .id('blogPortal')
      .documentId('blogPortal')
      .schemaType('blogPortal')
      .views(standardViews)
  )
  .icon(Circle);

// Our exported "Page" Menu
export const pageMenu = S.listItem()
  .title('Pages')
  .id('pages')
  .child(
    S.list().title('Pages').items([homeMenu, S.divider(), modulesMenu, S.divider(), simpleMenu, S.divider(), blogMenu, S.divider(), portalMenu])
  )
  .icon(Browsers);
