import React from 'react';
import QuizLayout from '@components/quizLayout';

const NoSymptoms = () => {
  return (
    <QuizLayout progress='100%' linkOptions={true}>
      <div className=''>
        <h1 className='blockH4 text-center max-w-[1200px] mx-auto mb-two'>
          It’s great to hear that you’re not experiencing any symptoms. However,
          heart valve disease can come on very slowly and people often do not
          experience symptoms until heart valve failure. To be sure your heart
          is healthy, schedule an annual heart check up with your GP, and make
          sure they listen to your heart with a stethoscope.
          <br />
          <br />
          Remember, that symptoms can be subtle, so keep an eye on changes in
          your ability to do day to day activities.
        </h1>
      </div>
    </QuizLayout>
  );
};

export default NoSymptoms;
