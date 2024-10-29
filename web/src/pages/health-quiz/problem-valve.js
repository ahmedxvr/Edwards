import React from 'react';
import { Link } from 'gatsby';
import QuizLayout from '@components/quizLayout';
import { useQuizContext } from '@lib/quizContext';

const ProblemValve = () => {
  const { dispatch } = useQuizContext();

  const handleInputChange = (input) => {
    dispatch({ type: 'updateQuizDetails', payload: { ProblemValve: input } });
  };
  return (
    <QuizLayout progress='60%'>
      <div className=''>
        <h1 className='blockH2 text-center max-w-3xl mx-auto mb-two'>
          Do you know which valve(s) there is a problem with?
        </h1>
        <div className='flex flex-col md:flex-row justify-center w-full mt-10 space-y-4 md:space-x-4 md:space-y-0'>
          <Link
            onClick={() => handleInputChange("I'm not sure")}
            to='/health-quiz/valve-other'
            className='btn-red w-full md:w-auto'
          >
            I'm not sure
          </Link>
          <Link
            onClick={() => handleInputChange('Aortic')}
            to='/health-quiz/aortic-treatment'
            className='btn-red w-full md:w-auto '
          >
            Aortic
          </Link>
          <Link
            onClick={() => handleInputChange('Mitral')}
            to='/health-quiz/mitral-treatment'
            className='btn-red w-full md:w-auto '
          >
            Mitral
          </Link>
          <Link
            onClick={() => handleInputChange('Other')}
            to='/health-quiz/valve-other'
            className='btn-red w-full md:w-auto '
          >
            Other
          </Link>
        </div>
      </div>
    </QuizLayout>
  );
};

export default ProblemValve;
