import React from 'react';
import { motion } from 'framer-motion';

export const QuizPageLoader = () => {
  return (
    <>
      {/* Mount Out */}
      <motion.div
        className='bg-grey w-screen h-full fixed top-0 left-0 pointer-events-none z-[1000]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
      />
      {/* Mount In */}
      <motion.div
        className='bg-grey w-screen h-full fixed top-0 left-0 pointer-events-none z-[1000]'
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.2,
          delay: 0.2,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      />
    </>
  );
};
