import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FlowerSpinner } from 'react-epic-spinners';
import { motion } from 'framer-motion';
import ModuleWrapper from '../moduleWrapper';
import { SanityImage } from '@components/sanity/sanityImage';
import { SimplePortableText } from '@components/sanity/simplePortableText';
import GreyArrow from '@svg/greyarrow.svg';

const FormBlock = ({ config, key, formText, formImage }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [regionState, setRegionState] = useState('');
  // const [selectedContactMethod, setSelectedContactMethod] = useState("email");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const handleRadioChange = (e) => {
  //   setSelectedContactMethod(e.target.value);
  // };

  const handleRegionChange = (e) => {
    setRegionState(e.target.value);
  };

  const onSubmit = async (e) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('firstName', e.firstName);
    formData.append('lastName', e.lastName);
    formData.append('email', e.email);
    formData.append('region', regionState);
    formData.append('phone', e.phone);
    // formData.append("contactBy", selectedContactMethod);
    // formData.append("address", e.address);
    // formData.append("city", e.city);
    // formData.append("postcode", e.postcode);

    await axios
      .post(
        'https://getform.io/f/e9d0bbe6-b31e-4329-a1f9-0be74fdef30a',
        formData,
        {
          headers: { Accept: 'application/json' },
        }
      )
      .then((response) => {
        console.log(response);
        setIsSubmitting(false);
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
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

  return (
    <ModuleWrapper
      key={key}
      {...config}
      className='grid gap-y-10 grid-cols-1 lg:grid-cols-2 gap-x-24 items-start px-gutter'
    >
      <h2 className='blockH6 mt-4 text-black row-start-1 col-start-1 col-end-2 lg:col-end-3 self-start '>
        Never miss a beat
      </h2>

      {/* Image */}
      <div className='rounded-3xl overflow-hidden row-start-4 lg:row-start-2  col-start-1 self-start'>
        <SanityImage image={formImage} className='block' />
      </div>

      {/* Text */}
      <div className='row-start-2 lg:row-start-1 row-end-2  lg:px-0 col-start-1 lg:col-start-2'>
        <SimplePortableText text={formText} />
      </div>

      <div className='row-start-3 lg:row-start-2 row-end-3  lg:px-0 col-start-1 lg:col-start-2 '>
        <div className='  max-w-[440px]'>
          <form onSubmit={handleSubmit(onSubmit)} id='home-info-form'>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className='blockH3 '>
                  Thank you.
                  <br />
                  We will be in touch
                </h2>
              </motion.div>
            ) : (
              <div className=' space-y-7'>
                <div class='relative group'>
                  <input
                    type='text'
                    placeholder=' '
                    className='custom-text-input-two peer'
                    {...register('firstName', {
                      required: true,
                    })}
                  />
                  <label for='firstName' className='custom-label-two'>
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
                    className='custom-text-input-two peer'
                    {...register('lastName', {
                      required: true,
                    })}
                  />
                  <label for='lastName' className='custom-label-two'>
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
                    className='custom-text-input-two peer'
                    {...register('email', {
                      required: true,
                    })}
                  />
                  <label for='email' className='custom-label-two'>
                    Email
                  </label>
                  {errors.email?.type === 'required' && (
                    <p className='custom-error'>Field is required</p>
                  )}
                </div>
                <div class='relative group'>
                  <input
                    type='text'
                    placeholder=' '
                    className='custom-text-input-two peer'
                    {...register('phone', {
                      required: true,
                    })}
                  />
                  <label for='phone' className='custom-label-two'>
                    Phone Number
                  </label>
                  {errors.phone?.type === 'required' && (
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
                      className='absolute -top-6 left-3 text-darkGrey/80 blockH7 scale-75'
                    >
                      Region
                    </motion.span>
                  )}
                  <select
                    name='region'
                    id=''
                    className='custom-select-form-home'
                    placeholder='Region'
                    onChange={handleRegionChange}
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
                {/* <div className='flex justify-between max-w-sm '>
                  <p className='blockH7'>Contact me by</p>
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
                    <label for='email'>Email</label>
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
                    <label for='mail'>Mail</label>
                  </div>
                </div>
                <AnimatePresence mode='wait'>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={
                      selectedContactMethod === 'mail'
                        ? {
                            opacity: 1,
                            height: 'auto',
                          }
                        : { opacity: 0, height: 0 }
                    }
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className=' space-y-7'
                  >
                    <div class='relative group'>
                      <input
                        type='text'
                        placeholder=' '
                        className='custom-text-input-two peer'
                        {...register('address', {
                          required:
                            selectedContactMethod === 'mail' ? true : false,
                        })}
                      />
                      <label for='address' className='custom-label-two'>
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
                        className='custom-text-input-two peer'
                        {...register('city', {
                          required:
                            selectedContactMethod === 'mail' ? true : false,
                        })}
                      />
                      <label for='city' className='custom-label-two'>
                        City
                      </label>
                      {errors.city?.type === 'required' && (
                        <p className='custom-error'>Field is required</p>
                      )}
                    </div>

                    <div class='relative group'>
                      <input
                        type='number'
                        placeholder=' '
                        className='custom-text-input-two peer'
                        {...register('postcode', {
                          required:
                            selectedContactMethod === 'mail' ? true : false,
                        })}
                      />
                      <label for='postcode' className='custom-label-two'>
                        Postcode
                      </label>
                      {errors.postcode?.type === 'required' && (
                        <p className='custom-error'>Field is required</p>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence> */}
                <div className='flex gap-x-5 items-center mt-10'>
                  <button type='submit' className='btn-red  w-fit'>
                    Order a free info kit
                  </button>
                  {isSubmitting && (
                    <FlowerSpinner className=' ' color='#CE2E49' size={50} />
                  )}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </ModuleWrapper>
  );
};

export default FormBlock;
