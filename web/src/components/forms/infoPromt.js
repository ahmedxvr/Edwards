import React from 'react';
import { Link } from 'gatsby';
import { useQuizContext } from '@lib/quizContext';

const InfoPrompt = () => {
  const { dispatch } = useQuizContext();

  const handleInputChange = (input) => {
    dispatch({ type: 'updateQuizDetails', payload: { moreInfo: input } });
  };

  return (
    <div className='flex justify-center mt-10 space-x-4'>
      <Link
        onClick={() => handleInputChange('No')}
        to='/health-quiz/more-info/no-info'
        className='btn-red '
      >
        No
      </Link>
      <Link
        onClick={() => handleInputChange('Yes')}
        to='/health-quiz/info-form'
        className='btn-red'
      >
        Yes
      </Link>
    </div>
  );
};

export default InfoPrompt;
