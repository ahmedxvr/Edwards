import React from 'react';
import QuizLayout from '@components/quizLayout';
import { useAtom } from 'jotai';
import { forMyselfAtom } from '@lib/jotai';
import LinkButton from '@components/ui/linkButton';

const InfokitFor = () => {
  const [forMyself, setForMyself] = useAtom(forMyselfAtom);
  const handleInputChange = (input) => setForMyself(input);

  return (
    <QuizLayout
      progress='0%'
      isSurvey
      questionHeading='Who did you request the info kit for?'
    >
      <div className='flex flex-col md:flex-row justify-center mt-10 md:space-x-4 space-y-4 md:space-y-0'>
        <LinkButton
          onClick={() => handleInputChange(true)}
          link='/health-survey/age'
          text='Myself'
        />
        <LinkButton
          onClick={() => handleInputChange(false)}
          link='/health-survey/age'
          text='Someone else'
        />
      </div>
    </QuizLayout>
  );
};

export default InfokitFor;
