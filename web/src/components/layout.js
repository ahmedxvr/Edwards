import React, { useEffect } from 'react';

import '@css/tailwind.css';
import '@css/main.css';

import { Header } from './nav/header';
import { Footer } from './nav/footer';
import { PageLoader } from '@components/pageLoader';
import { useSiteContext } from '@lib/context';
import { useQuizOpen } from '@lib/context';

function hasTouch() {
  return (
    'ontouchstart' in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

const Layout = ({ reverseHeader, children, className }) => {
  const [formOpen, setFormOpen] = React.useState(false);
  const toggleForm = () => setFormOpen((prev) => !prev);

  const { state } = useSiteContext();
  const toggleQuizOpen = useQuizOpen();

  useEffect(() => {
    document.body.className += ' bg-grey min-h-screen';
    if (!hasTouch()) document.body.className += ' hasHover';
  }, []);

  return (
    <>
      {/* Page Content */}
      <Header
        reverseHeader={reverseHeader}
        toggleForm={toggleForm}
        toggleQuizOpen={() => toggleQuizOpen(!state.quizOpen)}
      />
      <main className={`${className} w-full absolute top-0 left-0`}>
        {children}
        <Footer toggleForm={toggleForm} />
      </main>
      <PageLoader />
    </>
  );
};

export default Layout;
