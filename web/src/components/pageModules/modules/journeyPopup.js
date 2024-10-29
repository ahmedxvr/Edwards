import React, { useState } from 'react';
import ModuleWrapper from '../moduleWrapper';
import { SimplePortableText } from '../../sanity/simplePortableText';
import { SanityImage } from '../../sanity/sanityImage';
import PortalModal from '../../ui/portalModal';
import cx from 'classnames';

import CloseIcon from '@svg/close.svg';
import ArrowLeft from '@svg/arrow-left.svg';
import ArrowRight from '@svg/arrow-right.svg';

const JourneyModalInner = ({ setPopupOpen, steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleRightClick = () => {
    if (currentStep === steps.length - 1) {
      setCurrentStep(0);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleLeftClick = () => {
    if (currentStep === 0) {
      setCurrentStep(steps.length - 1);
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className='h-screen w-full relative bg-grey overflow-y-scroll overflow-x-hidden flex flex-col justify-between '>
      <div className='fixed md:absolute top-10 right-10 z-40 '>
        <CloseIcon
          className='w-6  cursor-pointer'
          role='button'
          onClick={() => setPopupOpen(false)}
        />
      </div>
      <div className='hidden md:block' />
      <div className='md:grid grid-cols-14 items-center justify-center  pt-20 pb-40'>
        <div className='bg-white rounded-l-[40px] 2xl:rounded-r-[40px]   col-start-9 col-end-15 2xl:col-start-8 2xl:col-end-13 w-full object-contain mt-10 md:mt-0 ml-5'>
          <SanityImage image={steps[currentStep].graphic} />
        </div>
        <div className='flex flex-col gap-y-10 row-start-1 col-start-2 xl:col-start-3 col-end-8 2xl:col-end-7  mt-5 md:mt-0 px-5'>
          <div className='text-red'>
            <p className='blockH5  mb-2 '>{`Step ${currentStep + 1}`}</p>
            <h2 className='blockH2'>{steps[currentStep].title}</h2>
          </div>

          <SimplePortableText text={steps[currentStep].content} />
          {steps[currentStep].borderedText && (
            <div className='richH3 w-full  border border-black flex items-center justify-center px-3 py-3'>
              <p>{steps[currentStep].borderedText} </p>
            </div>
          )}
        </div>
      </div>
      <div className='fixed bottom-0 left-0 md:static bg-grey flex justify-between md:justify-center items-center pb-5 px-5 w-full'>
        <div className='md:absolute left-2 lg:left-5 top-1/2 '>
          <ArrowLeft
            className={cx(' cursor-pointer w-12 lg:w-20  object-contain', {
              'opacity-0 pointer-events-none': currentStep === 0,
            })}
            onClick={handleLeftClick}
          />
        </div>
        <div className='flex gap-x-7 relative items-center'>
          <span className='w-full bg-red h-[1px] absolute top-1/2 -translate-y-1/2 left-0 z-0' />
          {steps.map((step, index) => (
            <span
              className={cx(
                'inline-block h-2 md:h-3 w-2 md:w-3 border-red border rounded-full bg-white relative z-30',
                {
                  'bg-red !h-3 !w-3 md:!h-4 md:!w-4': index === currentStep,
                }
              )}
            />
          ))}
        </div>
        <div className='md:absolute right-2 lg:right-5 top-1/2 '>
          <ArrowRight
            className={cx(' cursor-pointer w-12 lg:w-20  object-contain', {
              'opacity-0  pointer-events-none':
                currentStep === steps.length - 1,
            })}
            onClick={handleRightClick}
          />
        </div>
      </div>
    </div>
  );
};

const JourneyPopup = ({ config, title, mainImage, subtitle, steps }) => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <ModuleWrapper {...config} className=''>
      <div className='flex flex-col items-center justify-center relative'>
        <div className='relative aspect-w-3 aspect-h-4 md:aspect-w-16 md:aspect-h-10 w-full'>
          {mainImage && (
            <SanityImage
              image={mainImage}
              className='absolute top-0 left-0 w-full h-full object-cover'
            />
          )}
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-40' />
        </div>

        <div className='max-w-[930px] w-full absolute text-white text-center px-gutter md:px-0'>
          <h2 className='blockH0 font-regular mb-4 md:mb-6'>{title}</h2>
          <h3 className='blockH7'>{subtitle}</h3>
          <button onClick={() => setPopupOpen(true)} className='btn-red mt-7'>
            Begin Journey
          </button>
        </div>
      </div>
      <PortalModal isShowing={popupOpen}>
        <JourneyModalInner setPopupOpen={setPopupOpen} steps={steps} />
      </PortalModal>
    </ModuleWrapper>
  );
};

export default JourneyPopup;
