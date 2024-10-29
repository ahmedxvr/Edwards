import React from 'react';
import QuizLayout from '@components/quizLayout';
import { useAtom } from 'jotai';
import { forMyselfAtom, surveyAtom } from '@lib/jotai';
import LinkButton from '@components/ui/linkButton';

const Age = () => {
  const [forMyself] = useAtom(forMyselfAtom);
  const [surveyData, setSurveyData] = useAtom(surveyAtom);

  const handleInputChange = (input) => {
    setSurveyData({ ...surveyData, age: input });
  };

  return (
    <QuizLayout
      progress='0%'
      isSurvey
      questionHeading={`How old are ${forMyself ? 'you' : 'they'}?`}
    >
      <div className='flex flex-col md:flex-row justify-center w-full mt-10 space-y-4 md:space-x-4 md:space-y-0'>
        <LinkButton
          onClick={() => handleInputChange('Under 55')}
          link='/health-survey/heart-murmur'
          text='Under 55'
        />
        <LinkButton
          onClick={() => handleInputChange('55-64')}
          link='/health-survey/heart-murmur'
          text='55-64'
        />
        <LinkButton
          onClick={() => handleInputChange('65-74')}
          link='/health-survey/heart-murmur'
          text='65-74'
        />
        <LinkButton
          onClick={() => handleInputChange('75+')}
          link='/health-survey/heart-murmur'
          text='75+'
        />
      </div>
    </QuizLayout>
  );
};

export default Age;
