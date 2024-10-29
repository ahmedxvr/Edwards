import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { StoryCard } from '../../cards/storyCard';
import { useStoryQuery } from '@querys/useStoryQuery';

const StoryBlock = ({ heading, subheading }) => {
  const { stories, categories } = useStoryQuery();
  const [activeCategory] = useState(0);

  return (
    <div className='px-gutter py-24 bg-grey'>
      <div className='text-center'>
        <h2 className='blockH2'>{heading}</h2>
        <span className='blockH7 block mt-7'>{subheading}</span>
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={activeCategory}
          className='mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-24'
        >
          {stories?.map(
            (story, i) =>
              story?.category?.title === categories[activeCategory]?.title && (
                <StoryCard key={i} {...story} />
              )
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default StoryBlock;
