import React from 'react';
import { Link } from 'gatsby';
import QuizLayout from '@components/quizLayout';
import { useQuizContext } from '@lib/quizContext';

import GreyArrow from '@svg/greyarrow.svg';

const ValveOther = () => {
  const { dispatch } = useQuizContext();

  const handleSelectChange = (input) => {
    dispatch({ type: 'updateQuizDetails', payload: { moreInfoOn: input } });
  };

  const handleInputChange = (input) => {
    dispatch({ type: 'updateQuizDetails', payload: { anythingElse: input } });
  };

  return (
    <QuizLayout progress='75%'>
      <div className=''>
        <h1 className='blockH3 text-center max-w-2xl mx-auto mb-two'>
          Would you like more information on any of the following?
        </h1>
        <div className='mt-10 max-w-2xl  mx-auto relative'>
          <select
            name='valveInfoSelect'
            id=''
            className='custom-select'
            onChange={(e) => handleSelectChange(e.target.value)}
          >
            <option selected='true' disabled='disabled'>
              Please select
            </option>
            <option value='Symptoms'>Symptoms</option>
            <option value='Waiting for treatment'>Waiting for treatment</option>
            <option value='Treatment options'>Treatment options</option>
          </select>
          <GreyArrow className='absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none' />
        </div>
        <div className='lg:w-[1000px] mx-auto'>
          <textarea
            type='text'
            name='valveInfoText'
            rows='5'
            className='custom-text-input mt-10'
            placeholder='Is there anything else we can help with?'
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>

        <div className='flex justify-center mt-10 space-x-4'>
          <Link
            to='/health-quiz/info-form?messageOne'
            className='btn-red mx-auto'
          >
            Next
          </Link>
        </div>
      </div>
    </QuizLayout>
  );
};

export default ValveOther;
