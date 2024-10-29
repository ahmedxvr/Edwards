import React, { useEffect } from 'react';
import QuizLayout from '@components/quizLayout';
import { useQuizContext } from '@lib/quizContext';

const NoInfo = () => {
  const { dispatch } = useQuizContext();

  const wordingStyle = 'blockH2 text-center max-w-4xl mx-auto mb-two';

  useEffect(() => {
    localStorage.removeItem('quizState');
    dispatch({ type: 'resetState' });
  }, []);

  return (
    <QuizLayout progress='100%' linkOptions={true}>
      <div className=''>
        <h1 className={wordingStyle}>
          Thanks for completing our heart health quiz. Make sure to follow our
          Facebook page to keep up to date with the latest heart valve disease
          information.
        </h1>
        {/* <div className='flex justify-center w-full mt-10'>
          <a
            href='https://www.facebook.com/ListenToYourHeartNZ'
            target='_blank'
            rel='noreferrer'
            className='btn-red mx-auto'
          >
            Our Facebook page
          </a>
        </div> */}
      </div>
    </QuizLayout>
  );
};

export default NoInfo;
