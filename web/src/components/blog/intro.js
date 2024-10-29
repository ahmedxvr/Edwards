import React from 'react';

import { SanityImage } from '../sanity/sanityImage';

export const Intro = ({ title, feautuedImage }) => {
  return (
    <div className='px-gutter bg-grey'>
      <h1 className='blockH0 pt-32 sm:pt-44 lg:pt-72 pb-16 sm:pb-20 md:pb-36 text-red text-center lg:px-gutter'>
        {title}
      </h1>
      {feautuedImage && (
        <div className='aspect-w-2 aspect-h-2 md:aspect-w-16 md:aspect-h-9 relative w-full'>
          <SanityImage
            image={feautuedImage}
            className='absolute top-0 left-0 w-full h-full object-cover rounded-3xl'
          />
        </div>
      )}
    </div>
  );
};
