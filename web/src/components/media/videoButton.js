import React, { useState } from 'react';
import { VideoLighthouse } from './videoLighthouse';

export const VideoButton = ({ linkText, videoUrl }) => {
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <>
      <button
        className='btn-red w-fit !px-14'
        onClick={() => setVideoOpen(true)}
      >
        {linkText}
      </button>
      {/* Video Modal */}
      {videoUrl && (
        <VideoLighthouse
          video={videoUrl}
          isOpen={videoOpen}
          setIsOpen={setVideoOpen}
        />
      )}
    </>
  );
};
