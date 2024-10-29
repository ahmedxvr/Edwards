/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { checkHash, isBrowser, scroller } from '@lib/scrollUtils';
import { StateProvider } from '@lib/context';
import { QuizStateProvider } from '@lib/quizContext';

export const wrapPageElement = ({ element }) => (
  <StateProvider>
    <QuizStateProvider>
      <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
    </QuizStateProvider>
  </StateProvider>
);

export const onRouteUpdate = (
  { location },
  { offset = 0, duration = 1000 }
) => {
  let windowHash;

  if (isBrowser) {
    window.gatsby_scroll_offset = offset;
    window.gatsby_scroll_duration = duration;
    windowHash = window.gatsby_scroll_hash;
  }
  setTimeout(() => {
    windowHash ? scroller(windowHash, offset) : checkHash(location, offset);
  }, 800);

  if (isBrowser && windowHash) {
    window.gatsby_scroll_hash = undefined;
  }
};

export const appHeight = () => {
  if (typeof window === 'undefined') {
    return;
  }
  const doc = document.documentElement;
  doc.style.setProperty('--app-height', `${window.innerHeight}px`);
};
typeof window !== 'undefined' && window.addEventListener('resize', appHeight);
appHeight();
