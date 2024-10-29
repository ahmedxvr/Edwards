import React from 'react';
import cx from 'classnames';
import ModuleWrapper from '../moduleWrapper';
import { SimplePortableText } from '../../sanity/simplePortableText';

const SingleColText = ({ config, centerText, text }) => {
  return (
    <ModuleWrapper {...config}>
      <div
        className={cx(
          'px-gutter',
          centerText && 'text-center max-w-[910px] mx-auto xl:px-0'
        )}
      >
        {text && <SimplePortableText desktop text={text} />}
      </div>
    </ModuleWrapper>
  );
};

export default SingleColText;
