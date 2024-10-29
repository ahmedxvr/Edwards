import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const AnchorScrollLink = ({ target, linkText, children, ...rest }) => {
  return (
    <ScrollLink
      to={target && target.current}
      offset={-100}
      smooth={true}
      {...rest}
    >
      {children || linkText}
    </ScrollLink>
  );
};

export default AnchorScrollLink;
