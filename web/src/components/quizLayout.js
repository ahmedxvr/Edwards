import React, { useEffect } from 'react';
import { useQuizContext } from '@lib/quizContext';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { IoMdClose } from 'react-icons/io';
import BackArrow from '@svg/back-arrow.svg';
import cx from 'classnames';

import '@css/tailwind.css';
import '@css/main.css';

function hasTouch() {
  return (
    'ontouchstart' in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

const QuizLayout = ({
  className,
  children,
  progress,
  hideNav,
  linkOptions,
  questionNumber,
  questionHeading,
  isSurvey,
  link,
  submitted,
}) => {
  useEffect(() => {
    document.body.className += ' bg-grey min-h-screen';
    if (!hasTouch()) document.body.className += ' hasHover';
  }, []);

  const { quizState, dispatch } = useQuizContext();

  const mainVars = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
        when: 'afterChildren',
      },
    },
  };

  useEffect(() => {
    if (progress) {
      dispatch({ type: 'updatePrevProgress', payload: progress });
    }
  }, [progress]);

  return (
    <>
      <main
        className={cx(
          className,
          'w-full h-full min-h-screen flex flex-col items-center justify-between bg-grey px-gutter  relative py-20'
        )}
      >
        <Link
          className='absolute top-[3.1rem] md:top-6 right-[1.8rem] md:right-6 z-[101]'
          to={isSurvey ? '/health-survey' : '/'}
        >
          <IoMdClose className='w-12 h-12' />
        </Link>
        <div className='bg-transparent h-10 w-full' />
        <motion.div
          variants={mainVars}
          initial='closed'
          animate='open'
          exit='closed'
        >
          {isSurvey && (
            <>
              <h1 className='text-center text-red mb-5  md:mb-10 blockH5'>
                {questionNumber && `Question ${questionNumber}`}
              </h1>
              <h1 className='blockH1 text-center'>{questionHeading}</h1>
            </>
          )}
          {children}
        </motion.div>

        <div className='pt-20 lg:pt-10'>
          {!hideNav && !submitted && (
            <div className={cx(isSurvey && ' w-full mx-auto')}>
              <div className=' bg-white h-1 md:w-[600px] w-[300px]'>
                <motion.div
                  className='bg-red h-1'
                  initial={{ width: quizState?.prevProgress }}
                  animate={{ width: progress }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                ></motion.div>
              </div>

              <div
                onClick={() => window.history.back()}
                className='cursor-pointer flex space-x-4 blockH5 items-center justify-center mt-10'
              >
                <BackArrow />
                <p>Go Back</p>
              </div>
            </div>
          )}
          {linkOptions && (
            <div className='flex flex-col md:flex-row space-x-0 md:space-x-10 space-y-6 md:space-y-0 blockH5 items-center justify-center mt-10'>
              <Link className='underline' to='/health-quiz'>
                Retake quiz
              </Link>
              <Link className='underline' to='/'>
                Back to website
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default QuizLayout;
