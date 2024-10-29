import React from 'react';
import { Link } from 'gatsby';
import QuizLayout from '@components/quizLayout';
import { useQuizContext } from '@lib/quizContext';

const MitralTreatment = () => {
  const { quizState, dispatch } = useQuizContext();

  const handleInputChange = (input) => {
    dispatch({
      type: 'updateQuizDetails',
      payload: { mitralTreatmentWaitingList: input },
    });
  };

  return (
    <QuizLayout progress='75%'>
      <div className=''>
        <h1 className='blockH2 text-center max-w-3xl mx-auto mb-two'>
          {`Are you waiting for treatment of ${
            quizState.completingForMyself ? 'your' : 'their'
          } mitral valve disease?`}
        </h1>
        <div className='flex justify-center mt-10 space-x-4'>
          <Link
            onClick={() => handleInputChange('No')}
            to='/health-quiz/treatment-symptoms'
            className='btn-red'
          >
            No
          </Link>
          <Link
            onClick={() => handleInputChange('Yes')}
            to='/health-quiz/treatment-info'
            className='btn-red'
          >
            Yes
          </Link>
        </div>
      </div>
    </QuizLayout>
  );
};

export default MitralTreatment;
