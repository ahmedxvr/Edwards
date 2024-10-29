import React from 'react';
import AnchorScrollLink from './anchorScrollLink';

const AnchorLinkGroup = ({ anchorLinks }) => {
  return (
    <div className='flex flex-col md:flex-row gap-x-[30px] gap-y-5'>
      {anchorLinks.map((anchorLink, index) => {
        return (
          <AnchorScrollLink
            key={index}
            {...anchorLink}
            className='btn-red w-max cursor-pointer'
          />
        );
      })}
    </div>
  );
};

export default AnchorLinkGroup;
