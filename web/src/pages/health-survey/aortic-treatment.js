import React from 'react';
import QuizLayout from '@components/quizLayout';
import LinkButton from '@components/ui/linkButton';
import { useAtom } from 'jotai';
import { forMyselfAtom, surveyAtom } from '@lib/jotai';

const AorticTreatment = () => {
  const [forMyself] = useAtom(forMyselfAtom);
  const [surveyData, setSurveyData] = useAtom(surveyAtom);

  const handleInputChange = (input) => {
    setSurveyData({ ...surveyData, aorticTreatment: input });
  };

  return (
    <QuizLayout
      progress='80%'
      questionNumber='4'
      isSurvey
      questionHeading={`Have ${
        forMyself ? 'you' : 'they'
      } been treated for Aortic Stenosis?`}
    >
      <div className='flex flex-col mt-10 space-y-4 max-w-none md:max-w-[50%] mx-auto'>
        <LinkButton
          onClick={() => handleInputChange('Yes a TAVI')}
          link='/health-survey/treatment-info'
          text='Yes a TAVI'
        />
        <LinkButton
          onClick={() => handleInputChange('Yes Surgery')}
          link='/health-survey/treatment-info'
          text='Yes Surgery'
        />
        <LinkButton
          onClick={() => handleInputChange('No')}
          link='/health-survey/treatment-info'
          text='No'
        />
        <LinkButton
          onClick={() => handleInputChange('No but on a wait list')}
          link='/health-survey/treatment-info'
          text='No but on a wait list'
        />
        <LinkButton
          onClick={() => handleInputChange('No not suitable for treatment')}
          link='/health-survey/treatment-info'
          text='No not suitable for treatment'
        />
      </div>
    </QuizLayout>
  );
};

export default AorticTreatment;
