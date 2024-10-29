import React from 'react';
import { SanityImage } from '../../sanity/sanityImage';
import { SimplePortableText } from '../../sanity/simplePortableText';

const HalfBanner = ({ image, text }) => {
  return (
    <div className='flex flex-col items-center justify-center relative'>
      <div className='relative aspect-w-3 aspect-h-4 md:aspect-w-16 md:aspect-h-6 w-full'>
        {image && (
          <SanityImage
            image={image}
            alt='sanity_image'
            className='absolute top-0 left-0 w-full h-full object-cover'
          />
        )}
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-40' />
      </div>

      <div className='max-w-[730px] w-full absolute text-white text-center px-gutter md:px-0'>
        {text && (
          <SimplePortableText
            text={text}
            desktop
            className='items-center !gap-y-7'
          />
        )}
      </div>
    </div>
  );
};

export default HalfBanner;
