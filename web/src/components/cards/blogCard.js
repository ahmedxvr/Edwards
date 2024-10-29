import React from 'react';
import { Link } from 'gatsby';

import { SanityImage } from '../sanity/sanityImage';

export const BlogCard = ({ feautuedImage, excerpt, date, title, slug }) => {
  return (
    <div>
      <Link to={`/${slug?.current}`}>
        <div className='aspect-w-16 aspect-h-10 relative rounded-2xl overflow-hidden z-10'>
          {feautuedImage && (
            <SanityImage
              image={feautuedImage}
              className='absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-all ease-in-out duration-300 z-1'
            />
          )}
        </div>
        <div className='mt-8 md:mt-12 flex flex-col gap-y-3 md:gap-y-5'>
          <span className='blockH7'>{date}</span>
          <h3 className='blockH4'>{title}</h3>
          <p className='blockH7'>{excerpt}</p>
        </div>
      </Link>
    </div>
  );
};
