import React from 'react';
import { Link } from 'gatsby';

import { useBlogQuery } from '@querys/useBlogQuery';
import { BlogCard } from '../cards/blogCard';
import { SanityImage } from '../sanity/sanityImage';

export const OtherBlogs = ({ currentBlog }) => {
  const { portal, blogs } = useBlogQuery();

  //filter out current blog
  const filteredBlogs = blogs?.filter(
    (blog) => blog?.slug?.current !== currentBlog
  );

  return (
    <div className='px-gutter py-[72px] lg:py-32'>
      <div className='flex flex-col lg:flex-row gap-y-8 items-center justify-between'>
        <h3 className='blockH1'>Other News</h3>
        <Link to={`/${portal?.slug?.current}`} className='btn-red-blue'>
          See all
        </Link>
      </div>
      <div className='pt-24 flex flex-col lg:flex-row gap-x-16'>
        <div className='w-full'>
          {filteredBlogs[0] && <BlogCard {...filteredBlogs[0]} />}
        </div>
        <div className='pt-16 lg:pt-0 w-full self-stretch flex flex-col justify-between'>
          {filteredBlogs
            ?.slice(1, 6)
            ?.map(({ title, date, slug, feautuedImage }, i) => (
              <>
                {i !== 0 && (
                  <hr className='w-full opacity-30 mt-6 pt-6 lg:mt-0 lg:pt-0' />
                )}
                <Link to={`/${slug?.current}`} key={i}>
                  <div className='aspect-w-16 aspect-h-10 relative rounded-2xl overflow-hidden z-10'>
                    {feautuedImage && (
                      <SanityImage
                        image={feautuedImage}
                        className='absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-all ease-in-out duration-300 z-1'
                      />
                    )}
                  </div>
                  <div className=' flex flex-col mt-8 md:mt-12 gap-y-3 md:gap-y-5 '>
                    <span className='blockH7'>{date}</span>
                    <h4 className='blockH4 mt-2'>{title}</h4>
                  </div>
                </Link>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};
