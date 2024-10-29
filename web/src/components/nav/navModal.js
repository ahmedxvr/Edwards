import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SwitchLink from '@components/links/switchLink';
import { useScrollFreeze } from '@hooks/useScrollFreeze';
import { useSiteConfig } from '@querys/useSiteConfig';

const variants = {
  open: {
    opacity: 1,

    transition: {
      duration: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const menuVars = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const NavInner = ({ navOpen, toggleForm, toggleNav }) => {
  useScrollFreeze();
  const { header } = useSiteConfig();
  return (
    <motion.div
      key={navOpen}
      initial='closed'
      animate='open'
      exit='closed'
      variants={variants}
      className='fixed top-0 z-40 left-0 h-screen bg-red w-full'
    >
      <div className='flex flex-col w-full items-center justify-center h-full gap-y-4 blockH3 text-white pt-10'>
        {header?.mainMenu?.map((link, i) => (
          <motion.div onClick={toggleNav} variants={menuVars}>
            <SwitchLink key={i} {...link} />
          </motion.div>
        ))}
        {header?.dropdownMenu?.map((link, i) => (
          <motion.div onClick={toggleNav} variants={menuVars}>
            <SwitchLink key={i} {...link} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const NavModal = ({ navOpen, toggleForm, toggleNav }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {navOpen && (
        <NavInner
          navOpen={navOpen}
          toggleForm={toggleForm}
          toggleNav={toggleNav}
        />
      )}
    </AnimatePresence>
  );
};
