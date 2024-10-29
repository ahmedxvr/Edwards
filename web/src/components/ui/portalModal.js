import React from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Hooks
import { useScrollFreeze } from '../../hooks';

const ModalInner = ({ children }) => {
  useScrollFreeze();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'spring', damping: 15 }}
      //   transition={{ duration: 0.5, ease: "easeInOut" }}
      className='w-full h-screen top-0 left-0 bg-white fixed flex z-[7000] overflow-hidden'
    >
      {children}
    </motion.div>
  );
};

const isClient = typeof document !== `undefined`;

const PortalModal = ({ children, isShowing }) =>
  isClient
    ? ReactDOM.createPortal(
        <AnimatePresence mode='wait'>
          {isShowing && <ModalInner>{children}</ModalInner>}
        </AnimatePresence>,
        document.body
      )
    : null;

export default PortalModal;
