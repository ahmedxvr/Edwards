import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { StateProvider } from '@lib/context';
import { QuizStateProvider } from '@lib/quizContext';

export const wrapPageElement = ({ element }) => {
  return (
    <StateProvider>
      <QuizStateProvider>
        <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
      </QuizStateProvider>
    </StateProvider>
  );
};
