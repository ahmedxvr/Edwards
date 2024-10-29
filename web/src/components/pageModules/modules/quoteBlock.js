import React from 'react';

import ModuleWrapper from '../moduleWrapper';
import { SanityImage } from '@components/sanity/sanityImage';

const QuoteBlock = ({ config, key, quote, author, authorTitle, image }) => {
  return (
    <ModuleWrapper
      {...config}
      key={key}
      className='grid gap-y-10 grid-cols-1 xl:grid-cols-2 gap-x-24 items-center px-gutter'
    >
      {/* Image */}
      <div className='rounded-3xl overflow-hidden row-start-2 xl:row-start-1 xl:col-start-2'>
        <SanityImage image={image} className='block' />
      </div>
      {/* Text */}
      <div className='row-start-1  xl:px-0 flex flex-col justify-between h-full'>
        <p className='richH1'>
          <span className='text-red'>"</span>
          {quote}
          <span className='text-red'>"</span>
        </p>
        <div className='richH3 pt-8'>
          <p className='font-bold'>{author}</p>
          <p>{authorTitle}</p>
        </div>
      </div>
    </ModuleWrapper>
  );
};

export default QuoteBlock;
