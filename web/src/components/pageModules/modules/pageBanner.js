import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import { SanityImage } from '../../sanity/sanityImage';
import { SimplePortableText } from '../../sanity/simplePortableText';

const PageBanner = ({
  tint,
  image,
  redText,
  text,
  buttonGroup,
  backgroundColor,
}) => {
  return (
    <div className='overflow-hidden relative'>
      <div
        style={{ backgroundColor: backgroundColor?.hex || '#4A4A4B' }}
        className={cx(
          'w-full relative flex flex-col md:flex-row  md:h-screen min-h-full  pb-12 md:pb-0 items-center',
          {}
        )}
      >
        {/* Image */}
        <div className='aspect-w-2 aspect-h-2 md:aspect-w-[unset] md:aspect-h-[unset] md:h-screen relative w-full'>
          <SanityImage
            image={image}
            className='absolute top-0 left-0 w-full h-full object-cover'
          />
          {tint && (
            <div className='bg-black bg-opacity-40 absolute top-0 left-0 w-full h-full object-cover' />
          )}
        </div>

        {/* Text */}

        <div
          className={cx(
            'md:mx-gutter md:absolute  w-full px-gutter md:px-0 mt-10 md:mt-40 md:mb-16',
            {}
          )}
        >
          <SimplePortableText
            text={text}
            className={cx('!gap-y-7 page-banner-text', {
              'text-white max-w-[630px]': !redText,
              'text-red max-w-[500px]': redText,
            })}
            desktop
          />
          {buttonGroup && (
            <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-[30px]'>
              <Link to='/health-quiz' className='btn-red inline-block w-fit'>
                Take our heart health quiz
              </Link>
              <AnchorLink
                to='/#info-form-block'
                className='btn-red inline-block w-fit'
              >
                Order a free info pack
              </AnchorLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
