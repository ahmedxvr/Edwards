import React from 'react';
import { useLocation } from '@reach/router';
import QuizLayout from '@components/quizLayout';
import { useQuizContext } from '@lib/quizContext';

const InfoTable = () => {
  const { quizState } = useQuizContext();
  const { search } = useLocation();

  // remove ? from search string
  const message = search.substring(1);

  const wordingStyle = 'blockH3 text-center max-w-[1200px] mx-auto mb-two';
  const colOneStyle = 'col-start-1 bg-[#828282] py-3 px-2 md:px-10';
  const colTwoStyle = 'col-start-2 bg-[#E0E0E0] py-3 px-2 md:px-10 text-black';

  const wording = (message) => {
    switch (message) {
      case 'messageOne':
        return (
          <h1 className={wordingStyle}>
            {` Heart Valve disease can progress quickly and can be fatal if not
            treated in time. The best way to ensure you get treatment at the
            right time, is to get regular echocardiograms to see how ${
              quizState.completingForMyself ? 'your' : 'their'
            } 
            disease is progressing.`}
            <br />
            <br />
            New Zealand Echo guidelines below:
          </h1>
        );
      case 'messageTwo':
        return (
          <h1 className={wordingStyle}>
            {` Regular echos and keeping track of ${
              quizState.completingForMyself ? 'your' : 'their'
            }  symptoms is crucial if ${
              quizState.completingForMyself ? 'you' : 'they'
            } 
            are waiting for the right time to get treated.`}
            <br />
            <br />
            Download our {''}
            <a
              href='https://cdn.sanity.io/files/aaaxfbct/production/7c0ccbe26f2061d9a170ac6661c6cb19ef67b3a2.pdf'
              target='_blank'
              rel='noreferrer'
              className='underline'
            >
              {' '}
              Symptom Tracker
            </a>
            ,
            {`to keep on top of any changes in ${
              quizState.completingForMyself ? 'your' : 'their'
            } 
            symptoms.`}
            <br />
            <br />
            {`And make sure ${
              quizState.completingForMyself ? 'you' : 'they'
            }  get echos as recommended by the New Zealand Echo
            guidelines below:`}
          </h1>
        );
      default:
        return (
          <h1 className={wordingStyle}>
            {` Heart Valve disease can progress quickly and can be fatal if not
            treated in time. The best way to ensure you get treatment at the
            right time, is to get regular echocardiograms to see how ${
              quizState.completingForMyself ? 'your' : 'their'
            } 
            disease is progressing.`}
            <br />
            <br />
            New Zealand Echo guidelines below:
          </h1>
        );
    }
  };

  return (
    <QuizLayout progress='100%' linkOptions={true}>
      <div className=''>
        {wording(message)}
        <div className=' text-white mt-10'>
          <div className='grid grid-cols-2 gap-2 mb-2 text-xl md:text-7xl'>
            <h2 className='text-center bg-red py-3 px-1'>
              Stage of
              <br />
              Aortic Stenosis
            </h2>
            <h2 className='text-center bg-red py-3 px-1'>
              Recommended
              <br />
              Echo Time
            </h2>
          </div>
          <div className='grid grid-cols-2 gap-2 blockH4'>
            <p className={colOneStyle}>Mild</p>
            <p className={colOneStyle}>Moderate</p>
            <p className={colOneStyle}>Severe</p>
            <p className={colOneStyle}>Severe with symptoms</p>

            <p className={`${colTwoStyle} row-start-1`}>Every 5 years</p>
            <p className={`${colTwoStyle} row-start-2`}>Every 2 years</p>
            <p className={`${colTwoStyle} row-start-3`}>
              Every year (if no symptoms)
            </p>
            <p className={`${colTwoStyle} row-start-4`}>
              This is when your valve needs to be replaced
            </p>
          </div>
        </div>
      </div>
    </QuizLayout>
  );
};

export default InfoTable;
