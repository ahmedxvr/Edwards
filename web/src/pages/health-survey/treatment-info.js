import React from 'react';
import QuizLayout from '@components/quizLayout';
import { useAtom } from 'jotai';
import { forMyselfAtom, surveyAtom } from '@lib/jotai';
import LinkButton from '@components/ui/linkButton';

const TreatmentInfo = () => {
  const [forMyself] = useAtom(forMyselfAtom);
  const [surveyData, setSurveyData] = useAtom(surveyAtom);

  const handleInputChange = (input) => {
    setSurveyData({ ...surveyData, informationUseful: input });
  };

  return (
    <QuizLayout
      progress='85%'
      questionNumber='5'
      isSurvey
      questionHeading={`Has the information ${
        forMyself ? 'you' : 'they'
      } have received from Listen to your heart been useful? `}
    >
      <div className='flex flex-col md:flex-row justify-center w-full mt-10 space-y-4 md:space-x-4 md:space-y-0'>
        <LinkButton
          onClick={() => handleInputChange('Yes')}
          link='/health-survey/other-info'
          text='Yes'
        />
        <LinkButton
          onClick={() => handleInputChange('No')}
          link='/health-survey/other-info'
          text='No'
        />
      </div>
    </QuizLayout>
  );
};

export default TreatmentInfo;
