import React, { useState } from 'react';
import { Link } from 'gatsby';
import QuizLayout from '@components/quizLayout';
import { useQuizContext } from '@lib/quizContext';

const Symptoms = () => {
  const { quizState, dispatch } = useQuizContext();
  const [symptoms, setSymptoms] = useState([]);
  const [showError, setShowError] = useState(false);

  const handleSymptomsChage = (input) => {
    if (symptoms.includes(input)) {
      setSymptoms(symptoms.filter((symptom) => symptom !== input));
    } else {
      setSymptoms([...symptoms, input]);
    }
  };

  const handleInputChange = () => {
    dispatch({
      type: 'updateQuizDetails',
      payload: { experiencingSymptoms: symptoms.join(', ') },
    });
  };

  const handleNextClick = () => {
    if (symptoms.length > 0) {
      handleInputChange();
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <QuizLayout progress='60%'>
      <div className=''>
        <h1 className='blockH2 text-center max-w-3xl mx-auto mb-two'>
          {`Are ${
            quizState.completingForMyself ? 'you' : 'they'
          } experiencing any of the following?`}
        </h1>
        <div className='flex flex-col justify-center w-fit mx-auto mt-10 space-y-4'>
          <div className='custom-checkbox-container'>
            <input
              type='checkbox'
              id='breathShort'
              name='breathShort'
              value='Shortness of breath'
              className='custom-checkbox'
              onChange={(e) => handleSymptomsChage(e.target.value)}
            />
            <label for='breathShort' className='blockH5'>
              Shortness of breath
            </label>
          </div>
          <div className='custom-checkbox-container'>
            <input
              type='checkbox'
              id='chestpain'
              name='chestpain'
              value='Chest pain'
              className='custom-checkbox'
              onChange={(e) => handleSymptomsChage(e.target.value)}
            />
            <label for='chestpain' className='blockH5'>
              Chest pain
            </label>
          </div>
          <div className='custom-checkbox-container'>
            <input
              type='checkbox'
              id='dizziness'
              name='dizziness'
              value='Dizziness'
              className='custom-checkbox'
              onChange={(e) => handleSymptomsChage(e.target.value)}
            />
            <label for='dizziness' className='blockH5'>
              Dizziness
            </label>
          </div>
          <div className='custom-checkbox-container'>
            <input
              type='checkbox'
              id='fatigue'
              name='fatigue'
              value='Fatigue'
              className='custom-checkbox'
              onChange={(e) => handleSymptomsChage(e.target.value)}
            />
            <label for='fatigue' className='blockH5'>
              Fatigue
            </label>
          </div>
          <div className='custom-checkbox-container'>
            <input
              type='checkbox'
              id='strugglingWithActivities'
              name='strugglingWithActivities'
              value='Struggling with normal daily activities'
              className='custom-checkbox'
              onChange={(e) => handleSymptomsChage(e.target.value)}
            />
            <label for='strugglingWithActivities' className='blockH5'>
              Struggling with normal daily activities
            </label>
          </div>
          <div className='custom-checkbox-container'>
            <input
              type='checkbox'
              id='noSymptoms'
              name='noSymptoms'
              value='None'
              className='custom-checkbox'
              onChange={(e) => handleSymptomsChage(e.target.value)}
            />
            <label for='noSymptoms' className='blockH5'>
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
              symptoms.length < 1
                ? null
                : (symptoms.length > 1) & symptoms.includes('None')
                ? '/health-quiz/more-info?messageFive'
                : symptoms.includes('None')
                ? '/health-quiz/more-info/no-symptoms'
                : '/health-quiz/more-info?messageFive'
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
      </div>
    </QuizLayout>
  );
};

export default Symptoms;
