import React, { useState } from 'react';

import FluidVideo from '../media/fluidVideo';

export const SoundCard = ({ video }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className='max-w-[504px] w-full'>
      <div className='relative w-full rounded-3xl overflow-hidden z-10'>
        <FluidVideo
          url={video?.asset?.url}
          width='100%'
          className='!pb-[100%]'
          playing={playing}
          loop={true}
          muted={playing ? false : true}
          controls={false}
          playsinline={true}
        />
      </div>

      <button
        className='btn-red mt-5 md:mt-10'
        onClick={() => setPlaying((prev) => !prev)}
      >
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};
