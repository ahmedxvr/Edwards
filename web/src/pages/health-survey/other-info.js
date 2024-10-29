import React, { useEffect } from 'react';
import QuizLayout from '@components/quizLayout';
import { useAtom } from 'jotai';
import { surveyAtom } from '@lib/jotai';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';

const OtherInfo = () => {
  const [surveyData, setSurveyData] = useAtom(surveyAtom);

  const handleInputChange = (e) => {
    setSurveyData({ ...surveyData, otherInfoHelp: e.target.value });
  };

  useEffect(() => {
    if (!surveyData || Object.values(surveyData).length === 0) {
      navigate('/health-survey');
    }
  }, [surveyData]);

  return (
    <QuizLayout
      progress='90%'
      questionNumber='6'
      isSurvey
      nextButton
      questionHeading='Is there any other information we can help with?'
    >
      <div className='flex flex-col md:flex-row justify-center w-full mt-10 space-y-4 md:space-x-4 md:space-y-0'>
        <textarea
          rows='6'
          placeholder='Is there anything else we can help with?'
          className='blockH4 w-full rounded-[20px] p-5 md:p-10'
          onChange={handleInputChange}
        />
      </div>
      <div className='mt-5 md:mt-10 flex justify-center cursor-pointer'>
        <Link to='/health-survey/finish' className='btn-red'>
          Next
        </Link>
      </div>
    </QuizLayout>
  );
};

export default OtherInfo;
