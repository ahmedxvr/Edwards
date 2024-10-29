import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

import EyeIcon from 'part:@sanity/base/eye-icon';
import EditIcon from 'part:@sanity/base/edit-icon';
import SeoPreview from '../previews/seo/seo-preview';

const remoteURL = 'https://preview-edwards.gtsb.io/';
const localURL = 'https://preview-edwards.gtsb.io/';
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL;

export const standardViews = [
  S.view.form().icon(EditIcon),
  S.view.component(SeoPreview).options({ previewURL }).icon(EyeIcon).title('SEO Preview'),
];
