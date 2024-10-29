import React from 'react';
import QuizLayout from '@components/quizLayout';
import { useAtom } from 'jotai';
import { forMyselfAtom, surveyAtom } from '@lib/jotai';
import LinkButton from '@components/ui/linkButton';

const HeartMurmur = () => {
  const [forMyself] = useAtom(forMyselfAtom);
  const [surveyData, setSurveyData] = useAtom(surveyAtom);

  const handleInputChange = (input) => {
    setSurveyData({ ...surveyData, heartMurmur: input });
  };

  return (
    <QuizLayout
      progress='35%'
      questionNumber='1'
      isSurvey
      questionHeading={` Do ${forMyself ? 'you' : 'they'} have a heart murmur?`}
    >
      <div className='flex flex-col md:flex-row justify-center w-full mt-10 space-y-4 md:space-x-4 md:space-y-0'>
        <LinkButton
          onClick={() => handleInputChange('Yes')}
          link='/health-survey/echocardiogram'
          text='Yes'
        />
        <LinkButton
          onClick={() => handleInputChange('No')}
          link='/health-survey/echocardiogram'
          text='No'
        />
        <LinkButton
          onClick={() => handleInputChange("I don't know")}
          link='/health-survey/echocardiogram'
          text="I don't know"
        />
      </div>
    </QuizLayout>
  );
};

export default HeartMurmur;
