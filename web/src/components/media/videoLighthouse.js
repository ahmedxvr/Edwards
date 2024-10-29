import React from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FluidVideo from '../media/fluidVideo';
import { useScrollFreeze } from '../../hooks/useScrollFreeze';
import { IoMdClose } from 'react-icons/io';

const ModalInner = ({ video, setIsOpen }) => {
  useScrollFreeze();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed z-[100] w-full h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center px-gutter md:px-28'
    >
      <button
        className='text-white absolute top-4 md:top-8 right-gutter md:right-8'
        onClick={() => setIsOpen(false)}
      >
        <IoMdClose className='w-12 h-12' />
      </button>
      <FluidVideo
        url={video}
        width='100%'
        className='w-full max-h-screen feature-video'
        playing={true}
        loop={true}
        muted={true}
        controls={true}
        playsinline={true}
      />
    </motion.div>
  );
};

const isClient = typeof document !== `undefined`;

export const VideoLighthouse = ({ video, setIsOpen, isOpen }) =>
  isClient
    ? ReactDOM.createPortal(
        <AnimatePresence exitBeforeEnter>
          {isOpen && (
            <ModalInner key={isOpen} video={video} setIsOpen={setIsOpen} />
          )}
        </AnimatePresence>,
        document.body
      )
    : null;
