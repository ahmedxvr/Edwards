import React from 'react';
import cx from 'classnames';

import ModuleWrapper from '../moduleWrapper';
import { SanityImage } from '@components/sanity/sanityImage';
import { SimplePortableText } from '@components/sanity/simplePortableText';

const ImageText = ({ config, key, text, image, layout, hasSharpBorder }) => {
  return (
    <ModuleWrapper
      {...config}
      key={key}
      className='grid gap-y-10 grid-cols-1 lg:grid-cols-2 gap-x-24 items-center px-gutter'
    >
      {/* Image */}
      <div
        className={cx(' overflow-hidden row-start-2 lg:row-start-1', {
          'lg:col-start-1': layout === 'left' || !layout,
          'lg:col-start-2': layout === 'right',
          'rounded-3xl': !hasSharpBorder,
        })}
      >
        <SanityImage image={image} className='block' />
      </div>
      {/* Text */}
      <div className='row-start-1  lg:px-0'>
        <SimplePortableText text={text} />
      </div>
    </ModuleWrapper>
  );
};

export default ImageText;
