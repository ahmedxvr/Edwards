import React from 'react';
import { Field, ErrorMessage } from 'formik';
import cx from 'classnames';

import ErrorIcon from '@svg/error.svg';
import Chevron from '@svg/chevron.svg';

const CustomErrorMessage = ({ children, isSelect }) => {
  return (
    <div
      className={cx('flex items-center absolute top-1/2 transform -translate-y-1/2 gap-x-2', {
        'right-10': isSelect,
        'right-3': !isSelect,
      })}
    >
      <span className="text-red text-[10px]">{children}</span>
      <ErrorIcon className="w-4 text-red fill-current" />
    </div>
  );
};

export const StandardInput = ({ name, ...props }) => {
  return (
    <div className="relative">
      <Field
        name={name}
        {...props}
        className={cx('bg-white w-full px-2 py-3 rounded-lg placeholder-current')}
      />
      <ErrorMessage name={name} component={CustomErrorMessage} />
    </div>
  );
};

export const ButtonRadio = ({ name, label, ...props }) => {
  return (
    <label className="btn-radio">
      <Field name={name} type="radio" {...props} className="hidden" />
      <span>{label}</span>
    </label>
  );
};

export const Checkbox = ({ name, label, ...props }) => {
  return (
    <label className="flex gap-x-4 text-base items-center">
      {label || 'Add a Label'}
      <Field
        name={name}
        {...props}
        className={cx('bg-white w-10 h-10 appearance-none checked:bg-red')}
        type="checkbox"
      />
    </label>
  );
};

export const SelectBox = ({ name, options = [], placeholder, ...props }) => {
  return (
    <div className="relative">
      <Field
        name={name}
        {...props}
        className={cx('bg-white w-full px-2 py-3 rounded-lg appearance-none')}
        component="select"
      >
        {/* map options */}
        <option value={null} defaultValue>
          {placeholder || 'Please Select'}
        </option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </Field>
      <Chevron className="absolute top-1/2 transform -translate-y-1/2 right-3 w-3 pointer-events-none" />
      <ErrorMessage name={name} component={CustomErrorMessage} isSelect />
    </div>
  );
};
