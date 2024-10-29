import React from 'react';
import { Link } from 'gatsby';
import QuizLayout from '@components/quizLayout';
import { useQuizContext } from '@lib/quizContext';

const HeartMurmur = () => {
  const { quizState, dispatch } = useQuizContext();

  const handleInputChange = (input) => {
    dispatch({ type: 'updateQuizDetails', payload: { heartMurmur: input } });
  };

  return (
    <QuizLayout progress='35%'>
      <div className=''>
        <h1 className='blockH2 text-center max-w-3xl mx-auto mb-two'>
          {`   Have ${
            quizState.completingForMyself ? 'you' : 'they'
          }  been checked for an abnormal heart murmur?`}
        </h1>
        <div className='flex flex-col items-center  w-full mt-10 space-y-4'>
          <Link
            onClick={() => handleInputChange('Yes and have a murmur')}
            to='/health-quiz/echocardiogram'
            className='btn-red mx-auto w-full sm:w-3/4'
          >
            {`Yes and ${
              quizState.completingForMyself ? 'I' : 'they'
            } have a murmur`}
          </Link>
          <Link
            onClick={() => handleInputChange('Yes and do not have a murmur')}
            to='/health-quiz/more-info?messageFour'
            className='btn-red mx-auto w-full sm:w-3/4'
          >
            {`  Yes, and ${
              quizState.completingForMyself ? 'I' : 'they'
            } do not have a murmur`}
          </Link>
          <Link
            onClick={() => handleInputChange('No, have not been checked')}
            to='/health-quiz/symptoms'
            className='btn-red mx-auto w-full sm:w-3/4'
          >
            {` No, ${
              quizState.completingForMyself ? 'I' : 'they'
            } have not been checked`}
          </Link>
          <Link
            onClick={() => handleInputChange('Not sure')}
            to='/health-quiz/more-info?messageSix'
            className='btn-red mx-auto w-full sm:w-3/4'
          >
            {`${quizState.completingForMyself ? "I'm" : "They're"} not sure`}
          </Link>
        </div>
      </div>
    </QuizLayout>
  );
};

export default HeartMurmur;
