import React from 'react';
import QuizLayout from '@components/quizLayout';
import { useAtom } from 'jotai';
import { forMyselfAtom, surveyAtom } from '@lib/jotai';
import LinkButton from '@components/ui/linkButton';

const AorticDiagnosis = () => {
  const [forMyself] = useAtom(forMyselfAtom);
  const [surveyData, setSurveyData] = useAtom(surveyAtom);

  const handleInputChange = (input) => {
    setSurveyData({ ...surveyData, aorticDiagnosis: input });
  };

  return (
    <QuizLayout
      progress='75%'
      isSurvey
      questionNumber='3'
      questionHeading={`Have ${
        forMyself ? 'you' : 'they'
      } been diagnosed with Aortic Stenosis?`}
    >
      <div className='flex flex-col md:flex-row justify-center mt-10 md:space-x-4 space-y-4 md:space-y-0'>
        <LinkButton
          onClick={() => handleInputChange('Yes')}
          link='/health-survey/aortic-treatment'
          text='Yes'
        />
        <LinkButton
          onClick={() => handleInputChange('No')}
          link='/health-survey/aortic-treatment'
          text='No'
        />
        <LinkButton
          onClick={() => handleInputChange('Have a different valve disease')}
          link='/health-survey/aortic-treatment'
          text={`${forMyself ? 'I' : 'They'} have a different valve disease`}
        />
      </div>
    </QuizLayout>
  );
};

export default AorticDiagnosis;
