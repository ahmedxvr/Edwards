import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import QuizLayout from '@components/quizLayout';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FlowerSpinner } from 'react-epic-spinners';
import { useAtom } from 'jotai';
import { forMyselfAtom, surveyAtom } from '@lib/jotai';
import GreyArrow from '@svg/greyarrow.svg';

const FinishSurvey = () => {
  const [forMyself, setForMyself] = useAtom(forMyselfAtom);
  const [surveyData, setSurveyData] = useAtom(surveyAtom);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [regionState, setRegionState] = useState('');

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async () => {
    setIsSubmitting(true);
    const formData = new FormData();

    Object.entries(surveyData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const getFormEndpoint = process.env.GATSBY_GETFORM_ENDPOINT;
    try {
      await axios.post(`https://getform.io/f/${getFormEndpoint}`, formData, {
        headers: { Accept: 'application/json' },
      });
      setIsSubmitting(false);
      setSubmitted(true);
      localStorage.removeItem('surveyData');
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSurveyData({ ...surveyData, [name]: value });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSurveyData({ ...surveyData, [name]: value });
    setRegionState(value);
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setSurveyData({ ...surveyData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSurveyData({ ...surveyData, [name]: checked });
  };

  const regions = [
    'Northland',
    'Auckland',
    'Waikato',
    'Bay of Plenty',
    'Gisborne',
    "Hawke's Bay",
    'Taranaki',
    'Manawatu-Wanganui',
    'Wellington',
    'Tasman',
    'Nelson',
    'Marlborough',
    'West Coast',
    'Canterbury',
    'Otago',
    'Southland',
  ];

  return (
    <QuizLayout progress='100%' isSurvey submitted={submitted}>
      <div className='pb-20'>
        <div className='relative'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id='survey-info-form'
            className=''
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='max-w-4xl'
              >
                <h1 className='blockH1 text-center '>
                  Thanks for completing our survey.
                  <br />
                  We are grateful for your participation and look forward to
                  serving you better in the future.
                </h1>
              </motion.div>
            ) : (
              <motion.div>
                <h1 className='blockH1 text-center mb-10'>
                  If you are happy with your answers, please fill in your
                  details and click submit to complete the survey.
                </h1>
                <div className='max-w-xl mx-auto space-y-7'>
                  <div class='relative group'>
                    <input
                      type='text'
                      placeholder=' '
                      className='custom-text-input peer'
                      {...register('firstName', {
                        required: true,
                        onChange: handleInputChange,
                      })}
                    />
                    <label htmlFor='firstName' className='custom-label'>
                      First Name
                    </label>
                    {errors.firstName?.type === 'required' && (
                      <p className='custom-error'>Field is required</p>
                    )}
                  </div>
                  <div class='relative group'>
                    <input
                      type='text'
                      placeholder=' '
                      className='custom-text-input peer'
                      {...register('lastName', {
                        required: true,
                        onChange: handleInputChange,
                      })}
                    />
                    <label htmlFor='lastName' className='custom-label'>
                      Last Name
                    </label>
                    {errors.lastName?.type === 'required' && (
                      <p className='custom-error'>Field is required</p>
                    )}
                  </div>
                  <div class='relative group'>
                    <input
                      type='text'
                      placeholder=' '
                      className='custom-text-input peer'
                      {...register('email', {
                        required: true,
                        onChange: handleInputChange,
                      })}
                    />
                    <label htmlFor='email' className='custom-label'>
                      Email
                    </label>
                    {errors.email?.type === 'required' && (
                      <p className='custom-error'>Field is required</p>
                    )}
                  </div>
                  <div className='flex justify-between max-w-md mx-auto'>
                    <p className='blockH7'>{`Contact ${
                      forMyself ? 'me' : 'them'
                    } by:`}</p>
                    <div className='custom-checkbox-container'>
                      <input
                        type='radio'
                        name='contactBy'
                        value='email'
                        id='email'
                        className='custom-checkbox'
                        defaultChecked
                        onChange={(e) => handleRadioChange(e)}
                      />
                      <label htmlFor='email'>Email</label>
                    </div>

                    <div className='custom-checkbox-container'>
                      <input
                        type='radio'
                        name='contactBy'
                        value='mail'
                        id='mail'
                        className='custom-checkbox'
                        onChange={(e) => handleRadioChange(e)}
                      />
                      <label htmlFor='mail'>Mail</label>
                    </div>
                  </div>
                  <div class='relative group'>
                    <input
                      type='text'
                      placeholder=' '
                      className='custom-text-input peer'
                      {...register('address', {
                        required: true,
                        onChange: handleInputChange,
                      })}
                    />
                    <label htmlFor='address' className='custom-label'>
                      Address
                    </label>
                    {errors.address?.type === 'required' && (
                      <p className='custom-error'>Field is required</p>
                    )}
                  </div>
                  <div class='relative group'>
                    <input
                      type='text'
                      placeholder=' '
                      className='custom-text-input peer'
                      {...register('city', {
                        required: true,
                        onChange: handleInputChange,
                      })}
                    />
                    <label htmlFor='city' className='custom-label'>
                      City
                    </label>
                    {errors.city?.type === 'required' && (
                      <p className='custom-error'>Field is required</p>
                    )}
                  </div>

                  <div className='relative'>
                    {regionState && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='absolute -top-6 left-1 text-darkGrey/80 blockH7 scale-75'
                      >
                        Region
                      </motion.span>
                    )}
                    <select
                      name='region'
                      id=''
                      className='custom-select-form'
                      placeholder='Region'
                      onChange={handleSelectChange}
                    >
                      <option value='' disabled selected>
                        Region
                      </option>
                      {regions.map((region, index) => {
                        return (
                          <option key={index} value={region}>
                            {region}
                          </option>
                        );
                      })}
                    </select>
                    <GreyArrow className='absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none' />
                  </div>
                  <div class='relative group'>
                    <input
                      type='number'
                      inputMode='numeric'
                      placeholder=' '
                      className='custom-text-input peer'
                      {...register('postcode', {
                        required: true,
                        onChange: handleInputChange,
                      })}
                    />
                    <label htmlFor='postcode' className='custom-label'>
                      Postcode
                    </label>
                    {errors.postcode?.type === 'required' && (
                      <p className='custom-error'>Field is required</p>
                    )}
                  </div>
                  <div class='relative group'>
                    <input
                      type='text'
                      inputMode='numeric'
                      placeholder=' '
                      className='custom-text-input peer'
                      {...register('phone', {
                        required: true,
                        onChange: handleInputChange,
                      })}
                    />
                    <label htmlFor='phone' className='custom-label'>
                      Phone number
                    </label>
                    {errors.phone?.type === 'required' && (
                      <p className='custom-error'>Field is required</p>
                    )}
                  </div>
                  <div className='custom-checkbox-container w-fit mx-auto'>
                    <input
                      type='checkbox'
                      id='subscribe'
                      name='subscribe'
                      value='subscribe'
                      className='custom-checkbox'
                      onChange={(e) => handleCheckboxChange(e)}
                    />
                    <label htmlFor='subscribe' className='blockH5'>
                      {`Keep ${forMyself ? 'me' : 'them'} updated with news`}
                    </label>
                  </div>
                </div>
              </motion.div>
            )}
          </form>
        </div>
        {!submitted && (
          <>
            <div className='max-w-[1400px] mx-auto mt-10'>
              <p>
                By ticking the above box you are agreeing to receive news and
                updates from Edwards Lifesciences.
                <br />
                <br />
                By providing your personal information, you agree to allow
                Edwards Lifesciences and its agents to use this information to
                communicate with you in the future, including information about
                services, events, and programs. Edwards Lifesciences and its
                agents will not sell, rent, or otherwise distribute your name
                and any personally identifiable information outside of Edwards
                Lifesciences and its agents. Edwards Lifesciences will use your
                information in accordance with the{' '}
                <a
                  href='https://www.edwards.com/legal/privacy-policy'
                  target='_blank'
                  rel='noreferrer'
                  className='underline'
                >
                  Edwards privacy policy.
                </a>
              </p>
            </div>

            <div className='flex justify-center mt-10 space-x-4 relative'>
              <button
                type='submit'
                form='survey-info-form'
                className='btn-red mx-auto'
              >
                Submit
              </button>
              {isSubmitting && (
                <FlowerSpinner
                  className='absolute -bottom-20 left-1/2 -translate-x-10 '
                  color='#CE2E49'
                  size={50}
                />
              )}
            </div>
          </>
        )}
      </div>
    </QuizLayout>
  );
};

export default FinishSurvey;
