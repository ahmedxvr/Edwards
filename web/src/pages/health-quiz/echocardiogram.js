import React from 'react';
import { Link } from 'gatsby';
import QuizLayout from '@components/quizLayout';
import { useQuizContext } from '@lib/quizContext';

const Echocardiogram = () => {
  const { quizState, dispatch } = useQuizContext();

  const handleInputChange = (input) => {
    dispatch({ type: 'updateQuizDetails', payload: { echocardiogram: input } });
  };

  return (
    <QuizLayout progress='50%'>
      <div className=''>
        <h1 className='blockH2 text-center max-w-3xl mx-auto mb-two'>
          {`Have ${
            quizState.completingForMyself ? 'you' : 'they'
          } had an echocardiogram,a simple heart ultrasound?`}
        </h1>
        <div className='flex flex-col items-center w-full mt-10 space-y-4'>
          <Link
            onClick={() => handleInputChange('Yes, and have a problem')}
            to='/health-quiz/problem-valve'
            className='btn-red mx-auto w-full sm:w-3/4'
          >
            {`Yes, and ${
              quizState.completingForMyself ? 'I' : 'they'
            } have been told ${
              quizState.completingForMyself ? 'I' : 'they'
            } have a problem with one or more of ${
              quizState.completingForMyself ? 'my' : 'their'
            }
            heart valves`}
          </Link>
          <Link
            onClick={() => handleInputChange('Yes, and heart is fine')}
            to='/health-quiz/more-info/no-info'
            className='btn-red mx-auto w-full sm:w-3/4'
          >
            {`Yes, and ${
              quizState.completingForMyself ? 'my' : 'their'
            } heart is fine`}
          </Link>
          <Link
            onClick={() => handleInputChange('Not yet, but on a waiting list')}
            to='/health-quiz/more-info?messageOne'
            className='btn-red mx-auto w-full sm:w-3/4'
          >
            {`Not yet, but ${
              quizState.completingForMyself ? "I'm" : "they're"
            } on a waiting list`}
          </Link>
          <Link
            onClick={() => handleInputChange('No')}
            to='/health-quiz/more-info?messageTwo'
            className='btn-red mx-auto w-full sm:w-3/4'
          >
            No
          </Link>
          <Link
            onClick={() => handleInputChange('Not sure')}
            to='/health-quiz/more-info?messageThree'
            className='btn-red mx-auto w-full sm:w-3/4'
          >
            {`${quizState.completingForMyself ? "I'm" : "They're"} not sure`}
          </Link>
        </div>
      </div>
    </QuizLayout>
  );
};

export default Echocardiogram;
