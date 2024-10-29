import React, { useState } from 'react';
import { Link } from 'gatsby';
import QuizLayout from '@components/quizLayout';
import { useQuizContext } from '@lib/quizContext';

const TreatmentInfo = () => {
  const { dispatch } = useQuizContext();
  const [info, setInfo] = useState([]);
  const [showError, setShowError] = useState(false);

  const handleInfoChage = (input) => {
    if (info.includes(input)) {
      setInfo(info.filter((item) => item !== input));
    } else {
      setInfo([...info, input]);
    }
  };

  const handleInputChange = () => {
    dispatch({
      type: 'updateQuizDetails',
      payload: { treatmentInfo: info.join(', ') },
    });
  };

  const handleNextClick = () => {
    if (info.length > 0) {
      handleInputChange();
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <QuizLayout progress='82%'>
      <div className=''>
        <h1 className='blockH2 text-center max-w-3xl mx-auto mb-two'>
          Would you like more information on any of the following?
        </h1>
        <div className='flex flex-col justify-center w-fit mx-auto mt-10 space-y-4'>
          <div className='custom-checkbox-container'>
            <input
              type='checkbox'
              id='symptoms'
              name='symptoms'
              value='Symptoms'
              className='custom-checkbox'
              onChange={(e) => handleInfoChage(e.target.value)}
            />
            <label for='symptoms' className='blockH5'>
              Symptoms
            </label>
          </div>
          <div className='custom-checkbox-container'>
            <input
              type='checkbox'
              id='awaitingTreatment'
              name='awaitingTreatment'
              value='Waiting for treatment'
              className='custom-checkbox'
              onChange={(e) => handleInfoChage(e.target.value)}
            />
            <label for='awaitingTreatment' className='blockH5'>
              Waiting for treatment
            </label>
          </div>
          <div className='custom-checkbox-container'>
            <input
              type='checkbox'
              id='treatmentOptions'
              name='treatmentOptions'
              value='Treatment options'
              className='custom-checkbox'
              onChange={(e) => handleInfoChage(e.target.value)}
            />
            <label for='treatmentOptions' className='blockH5'>
              Treatment options
            </label>
          </div>
          <div className='custom-checkbox-container'>
            <input
              type='checkbox'
              id='noInfo'
              name='noInfo'
              value='None'
              className='custom-checkbox'
              onChange={(e) => handleInfoChage(e.target.value)}
            />
            <label for='noInfo' className='blockH5'>
              None of the above
            </label>
          </div>
        </div>
        <div
          className='flex justify-center mt-10 relative'
          onClick={handleNextClick}
        >
          <Link
            to={
              info.length < 1
                ? null
                : (info.length > 1) & info.includes('None')
                ? '/health-quiz/info-form'
                : info.includes('None')
                ? '/health-quiz/info-table?messageOne'
                : '/health-quiz/info-form'
            }
            className='btn-red cursor-pointer'
          >
            Next
          </Link>
          {showError && (
            <p className='blockH9 text-red text-center absolute -bottom-16 sm:-bottom-8 left-1/2 -translate-x-1/2'>
              Please choose at least one that applies
            </p>
          )}
        </div>
        {/* <div className='flex justify-center mt-10 space-x-4'>
          <Link
            onClick={handleInputChange}
            to='/health-quiz/info-form'
            className='btn-red'
          >
            Yes
          </Link>
          <Link
            onClick={handleInputChange}
            to='/health-quiz/info-table?messageOne'
            className='btn-red '
          >
            No
          </Link>
        </div> */}
      </div>
    </QuizLayout>
  );
};

export default TreatmentInfo;
