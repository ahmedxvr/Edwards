import React from 'react';
import { Footer } from '@components/nav/footer';
import Logo from '@images/logo.png';
import LinkButton from '@components/ui/linkButton';
import { QuizPageLoader } from '@components/quizPageLoader';
import '@css/tailwind.css';
import '@css/main.css';

const Survey = () => {
  return (
    <>
      <div>
        <div className='absolute py-6 px-gutter xl:pl-16 xl:pr-20 flex justify-between items-center z-50 w-full'>
          <a href='/' target='_blank'>
            <img
              src={Logo}
              alt='logo'
              className='max-w-[120px] xl:max-w-[175px] w-full'
            />
          </a>
          <a href='/' target='_blank' className='btn-white hidden sm:flex'>
            Listen to your heart website
          </a>
        </div>

        <div className="relative w-full h-[600px] md:h-[600px] lg:h-[800px] xl:h-[1000px] 2xl:h-[1200px] bg-cover bg-center bg-no-repeat bg-[url('/survey-banner.png')]">
          <div className='absolute max-w-none lg:max-w-[800px] flex flex-col px-10 md:px-24 translate-y-1/3 text-white bottom-1/3  space-y-4 md:space-y-7'>
            <h1 className='blockH0'>Please take our survey</h1>
            <p className='blockH5'>
              Please take a moment to complete the survey, enabling us to
              enhance our services and better support your needs.
            </p>
            <div className='flex flex-col h-auto mr-auto'>
              <LinkButton
                link='/health-survey/infokit-for'
                text='Take patient survey'
              />
            </div>
          </div>
        </div>

        <div className='relative text-center space-y-10 blockH5 w-[80%] my-24 md:my-40  mx-auto'>
          <h2 className='blockH1 mx-auto '>We value your feedback</h2>
          <p className='w-full sm:w-[70%] xl:w-[50%] mx-auto'>
            We recently sent you an information kit and would like to find out
            how it went.
            <br />
            <br />
            Your participation will help us improve our content and tailor this
            to better meet your needs. Thank you for your time.
          </p>
          <div className='flex justify-center w-full mt-10'>
            <LinkButton
              link='/health-survey/infokit-for'
              text='Take patient survey'
            />
          </div>
        </div>
        <div className='elative bottom-0 w-full'>
          <Footer linkText={'Listen to your heart website'} linkUrl={'/'} />
        </div>
      </div>
      <QuizPageLoader />
    </>
  );
};

export default Survey;
