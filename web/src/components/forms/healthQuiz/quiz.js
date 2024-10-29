import React from 'react';
import { Link } from 'gatsby';

export const Quiz = ({ buttonText }) => {
  return (
    <Link to='/health-quiz' className='btn-red w-max mx-auto'>
      {buttonText || 'Start health quiz'}
    </Link>
  );
};
