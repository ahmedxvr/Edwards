import React from 'react';

import ReactPlayer from 'react-player';

import { wrapper, videoModal, teaserVideo } from './fluidVideo.module.css';

const FluidVideo = ({ className, teaser, ...props }) => {
  return (
    <div className={`${className} ${wrapper} ${videoModal} ${teaser && teaserVideo}`}>
      <ReactPlayer {...props} />
    </div>
  );
};

export default FluidVideo;
