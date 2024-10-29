import React from 'react';
import { Link } from 'gatsby';
import QuizLayout from '@components/quizLayout';
import { useAtom } from 'jotai';
import { forMyselfAtom, surveyAtom } from '@lib/jotai';
import LinkButton from '@components/ui/linkButton';

const EchoCardiogram = () => {
  const [forMyself] = useAtom(forMyselfAtom);
  const [surveyData, setSurveyData] = useAtom(surveyAtom);

  const handleInputChange = (input) => {
    setSurveyData({ ...surveyData, echocardiogram: input });
  };

  return (
    <QuizLayout
      progress='50%'
      questionNumber='2'
      isSurvey
      questionHeading={`Have ${
        forMyself ? 'you' : 'they'
      } had an echocardiogram in the last six months?`}
    >
      <div className='flex flex-col md:flex-row justify-center w-full mt-10 space-y-4 md:space-x-4 md:space-y-0'>
        <LinkButton
          onClick={() => handleInputChange('Yes')}
          link='/health-survey/aortic-diagnosis'
          text='Yes'
        />
        <LinkButton
          onClick={() => handleInputChange('No')}
          link='/health-survey/aortic-diagnosis'
          text='No'
        />
        <LinkButton
          onClick={() => handleInputChange('Not yet, but on a waiting list')}
          link='/health-survey/aortic-diagnosis'
          text='On a waiting list'
        />
      </div>
    </QuizLayout>
  );
};

export default EchoCardiogram;
