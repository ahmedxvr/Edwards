import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import QuizLayout from '@components/quizLayout';
import { useQuizContext } from '@lib/quizContext';

const Start = () => {
  const { dispatch } = useQuizContext();

  useEffect(() => {
    localStorage.removeItem('quizState');
    dispatch({ type: 'resetState' });
  }, []);
  return (
    <QuizLayout hideNav={true}>
      <div className=''>
        <h1 className='blockH2 text-center max-w-4xl mx-auto mb-two'>
          Please answer our simple questions to check for Heart Valve Disease
          symptoms.
        </h1>
        <div className='flex justify-center w-full mt-10'>
          <Link to='/health-quiz/completing-for' className='btn-red mx-auto'>
            Start Quiz
          </Link>
        </div>
      </div>
    </QuizLayout>
  );
};

export default Start;
