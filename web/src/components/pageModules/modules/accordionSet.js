import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ModuleWrapper from '../moduleWrapper';
import { SimplePortableText } from '../../sanity/simplePortableText';

import Plus from '@svg/plus.svg';
import Minus from '@svg/minus.svg';

const Accordion = ({ i, expanded, setExpanded, title, text }) => {
  const isOpen = i === expanded;
  return (
    <>
      <motion.div
        className='py-6 md:py-8 border-b flex flex-row justify-between items-center text-dark-teal cursor-pointer gap-x-12'
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <p className='blockH7 w-full'>{title}</p>
        <div className='w-10'>{isOpen ? <Minus /> : <Plus />}</div>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              variants={{
                collapsed: { opacity: 0, scale: 1 },
                open: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.8 }}
              className='py-4'
            >
              {text && <SimplePortableText text={text} desktop />}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

const AccordionSet = ({ config, title, items }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ModuleWrapper {...config}>
      <div className='grid grid-cols-14'>
        <div className='col-start-2 col-end-14 lg:col-start-3 lg:col-end-13'>
          <h2 className='blockH2 text-center'>{title}</h2>

          <div className='mt-4 md:mt-10'>
            {items.map((row, i) => (
              <Accordion
                key={i}
                i={i}
                expanded={expanded}
                setExpanded={setExpanded}
                {...row}
              />
            ))}
          </div>
        </div>
      </div>
    </ModuleWrapper>
  );
};

export default AccordionSet;
