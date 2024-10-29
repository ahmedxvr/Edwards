import React from 'react';
import { Link } from 'gatsby';
import QuizLayout from '@components/quizLayout';
import { useQuizContext } from '@lib/quizContext';

const CompletingFor = () => {
  const { dispatch } = useQuizContext();

  const handleInputChange = (input) => {
    dispatch({
      type: 'updateQuizDetails',
      payload: { completingForMyself: input },
    });
  };

  return (
    <QuizLayout hideNav={true}>
      <div className=''>
        <h1 className='blockH2 text-center max-w-3xl mx-auto mb-two'>
          I’m completing this for:
        </h1>
        <div className='flex flex-col md:flex-row justify-center w-full mt-10 space-y-4 md:space-x-4 md:space-y-0'>
          <Link
            onClick={() => handleInputChange(true)}
            to='/health-quiz/age'
            className='btn-red w-full md:w-auto '
          >
            Myself
          </Link>
          <Link
            onClick={() => handleInputChange(false)}
            to='/health-quiz/age'
            className='btn-red w-full md:w-auto '
          >
            Someone else
          </Link>
        </div>
      </div>
    </QuizLayout>
  );
};

export default CompletingFor;
