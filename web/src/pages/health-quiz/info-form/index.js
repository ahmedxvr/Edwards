import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import QuizLayout from '@components/quizLayout';
import { useQuizContext } from '@lib/quizContext';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FlowerSpinner } from 'react-epic-spinners';
import { useLocation } from '@reach/router';
import GreyArrow from '@svg/greyarrow.svg';

const InfoForm = () => {
  const { quizState, dispatch } = useQuizContext();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [regionState, setRegionState] = useState('');
  const { search } = useLocation();

  // remove ? from search string
  const message = search.substring(1);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async () => {
    setIsSubmitting(true);
    const formData = new FormData();

    Object.entries(quizState).forEach(([key, value]) => {
      if (key !== 'prevProgress') {
        formData.append(key, value);
      }
    });

    await axios
      .post(
        'https://getform.io/f/f9a788c0-9fad-42a9-898f-b9ca2b94c63d',
        formData,
        {
          headers: { Accept: 'application/json' },
        }
      )
      .then((response) => {
        console.log(response);
        setIsSubmitting(false);
        setSubmitted(true);
        localStorage.removeItem('quizState');
        dispatch({ type: 'resetState' });
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'updateQuizDetails',
      payload: { [name]: value },
    });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'updateQuizDetails', payload: { [name]: value } });
    setRegionState(value);
  };

  // const handleRadioChange = (e) => {
  //   const { name, value } = e.target;
  //   dispatch({
  //     type: "updateQuizDetails",
  //     payload: { [name]: value },
  //   });
  // };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    dispatch({
      type: 'updateQuizDetails',
      payload: { [name]: checked },
    });
  };

  const regions = [
    'Northland',
    'Auckland',
    'Waikato',
    'Bay of Plenty',
    'Gisborne',
    'Hawke’s Bay',
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

  const wordingStyle = 'blockH4 text-center  mx-auto mb-two';
  const altWordStyle = 'blockH3 text-center max-w-[800px] mx-auto mb-10';

  const wording = (message) => {
    switch (message) {
      case 'messageOne':
        return (
          <h1 className={altWordStyle}>
            {`Please fill in ${
              quizState.completingForMyself ? 'your' : 'their'
            } details below to order a free info
        kit`}
          </h1>
        );
      case 'messageTwo':
        return (
          <h1 className={altWordStyle}>
            Heart valve disease can progress quickly and can be fatal if not
            treated in time.
            <br />
            {`Make an appointment with ${
              quizState.completingForMyself ? 'your' : 'their'
            }  doctor to discuss your symptoms.`}
            <br />
            <br />
            {`Please fill in ${
              quizState.completingForMyself ? 'your' : 'their'
            } details below to order a free info kit`}
          </h1>
        );
      default:
        return (
          <h1 className={altWordStyle}>
            {`Please provide us with ${
              quizState.completingForMyself ? 'your' : 'their'
            } details so we can send ${
              quizState.completingForMyself ? 'you' : 'them'
            } the relevant information.`}
          </h1>
        );
    }
  };

  return (
    <QuizLayout progress='90%' hideNav={submitted} linkOptions={submitted}>
      <div className='pb-20'>
        <div className='    relative'>
          <form onSubmit={handleSubmit(onSubmit)} id='info-form' className=''>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='max-w-4xl'
              >
                <h1 className={wordingStyle}>
                  Thanks! We will send all relevant information.
                  <br />
                  <br />
                  Make sure to follow our Facebook page to keep up to date with
                  the latest heart valve disease information.
                </h1>
              </motion.div>
            ) : (
              <motion.div>
                {wording(message)}
                <div className='max-w-xl mx-auto space-y-7'>
                  <div class='relative group'>
                    <input
                      type='text'
                      placeholder=' '
                      className='custom-text-input peer'
                      {...register('firstName', {
                        required: true,
                        onChange: handleInputChange,
                        // setValueAs: (value) => value,
                      })}
                    />
                    <label for='firstName' className='custom-label'>
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
                        // setValueAs: (value) => value,
                      })}
                    />
                    <label for='lastName' className='custom-label'>
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
                        // setValueAs: (value) => value,
                      })}
                    />
                    <label for='email' className='custom-label'>
                      Email
                    </label>
                    {errors.email?.type === 'required' && (
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

                  {/* Hidden until further notice */}
                  {/* <div className="flex justify-between max-w-md mx-auto">
                    <p className="blockH7">{`Contact ${
                      quizState.completingForMyself ? "me" : "them"
                    } by:`}</p>
                    <div className="custom-checkbox-container">
                      <input
                        type="radio"
                        name="contactBy"
                        value="email"
                        id="email"
                        className="custom-checkbox"
                        defaultChecked
                        onChange={(e) => handleRadioChange(e)}
                      />
                      <label for="email">Email</label>
                    </div>

                    <div className="custom-checkbox-container">
                      <input
                        type="radio"
                        name="contactBy"
                        value="mail"
                        id="mail"
                        className="custom-checkbox"
                        onChange={(e) => handleRadioChange(e)}
                      />
                      <label for="mail">Mail</label>
                    </div>
                  </div>
                  <div class="relative group">
                    <input
                      type="text"
                      placeholder=" "
                      className="custom-text-input peer"
                      {...register("address", {
                        required: true,
                        onChange: handleInputChange,
                        // setValueAs: (value) => value,
                      })}
                    />
                    <label for="address" className="custom-label">
                      Address
                    </label>
                    {errors.address?.type === "required" && (
                      <p className="custom-error">Field is required</p>
                    )}
                  </div>
                  <div class="relative group">
                    <input
                      type="text"
                      placeholder=" "
                      className="custom-text-input peer"
                      {...register("city", {
                        required: true,
                        onChange: handleInputChange,
                        // setValueAs: (value) => value,
                      })}
                    />
                    <label for="city" className="custom-label">
                      City
                    </label>
                    {errors.city?.type === "required" && (
                      <p className="custom-error">Field is required</p>
                    )}
                  </div>

                  <div class="relative group">
                    <input
                      type="number"
                      inputMode="numeric"
                      placeholder=" "
                      className="custom-text-input peer"
                      {...register("postcode", {
                        required: true,
                        onChange: handleInputChange,
                        // setValueAs: (value) => value,
                      })}
                    />
                    <label for="postcode" className="custom-label">
                      Postcode
                    </label>
                    {errors.postcode?.type === "required" && (
                      <p className="custom-error">Field is required</p>
                    )}
                  </div>
                  <div class="relative group">
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder=" "
                      className="custom-text-input peer"
                      {...register("phone", {
                        required: true,
                        onChange: handleInputChange,
                        // setValueAs: (value) => value,
                      })}
                    />
                    <label for="phone" className="custom-label">
                      Phone number
                    </label>
                    {errors.phone?.type === "required" && (
                      <p className="custom-error">Field is required</p>
                    )}
                  </div> */}
                  <div className='custom-checkbox-container w-fit mx-auto'>
                    <input
                      type='checkbox'
                      id='subscribe'
                      name='subscribe'
                      value='subscribe'
                      className='custom-checkbox'
                      onChange={(e) => handleCheckboxChange(e)}
                    />
                    <label for='subscribe' className='blockH5'>
                      {`Keep ${
                        quizState.completingForMyself ? 'me' : 'them'
                      } updated with news`}
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
                form='info-form'
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

export default InfoForm;
