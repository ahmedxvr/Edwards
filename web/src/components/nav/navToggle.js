import React from 'react';
import { motion } from 'framer-motion';

const menuVars = {
  top: {
    initial: {
      y: 0,
    },
    animate: {
      rotate: 45,
      y: 10,
      transition: {
        duration: 0.3,
        delay: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  },
  middle: {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  },
  bottom: {
    initial: {
      y: 0,
    },
    animate: {
      rotate: -45,
      y: -10,
      transition: {
        duration: 0.3,
        delay: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  },
};

export const NavToggle = ({ toggleNav, reverseHeader, isPinned, navOpen }) => {
  const fill = (isPinned || !reverseHeader) && !navOpen ? '#CE2E49' : '#fff';
  return (
    <button className='xl:hidden' onClick={toggleNav}>
      <svg
        className='overflow-visible'
        width='32'
        height='23'
        viewBox='0 0 32 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.rect
          variants={menuVars.top}
          initial='initial'
          animate={navOpen ? 'animate' : 'initial'}
          width='32'
          height='3'
          fill={fill}
        />
        <motion.rect
          variants={menuVars.middle}
          initial='initial'
          animate={navOpen ? 'animate' : 'initial'}
          y='10'
          width='32'
          height='3'
          fill={fill}
        />
        <motion.rect
          variants={menuVars.bottom}
          initial='initial'
          animate={navOpen ? 'animate' : 'initial'}
          y='20'
          width='32'
          height='3'
          fill={fill}
        />
      </svg>
    </button>
  );
};
