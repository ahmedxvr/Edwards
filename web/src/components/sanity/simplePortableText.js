import React from 'react';
import PortableText from 'react-portable-text';
import cx from 'classnames';

import SwitchLink from '@components/links/switchLink';
import { Quiz } from '@components/forms/healthQuiz/quiz';
import { SanityImage } from './sanityImage';
import { VideoButton } from '../media/videoButton';
import AnchorLinkGroup from '../links/anchorLinkGroup';

export const SimplePortableText = ({
  text,
  centerText = false,
  className,
  desktop,
  ...props
}) => {
  return text ? (
    <PortableText
      content={text}
      serializers={{
        highlight: (props) => <span {...props} className='text-red' />,
        normal: (props) => (
          <p
            {...props}
            className={`${desktop ? 'blockH8' : 'richH4'} font-display`}
          />
        ),
        h1: (props) => (
          <h1
            {...props}
            className={`${desktop ? 'blockH0' : 'richH0'} font-display`}
          />
        ),
        h2: (props) => (
          <h2
            {...props}
            className={`${desktop ? 'blockH1' : 'richH1'} font-display`}
          />
        ),
        h3: (props) => (
          <h3
            {...props}
            className={`${desktop ? 'blockH2' : 'richH2'} font-display`}
          />
        ),
        h4: (props) => (
          <h4
            {...props}
            className={`${desktop ? 'blockH3' : 'richH3'} font-display`}
          />
        ),
        h5: (props) => (
          <h5
            {...props}
            className={`${desktop ? 'blockH5' : 'richH5'} font-display`}
          />
        ),
        h6: (props) => <h6 {...props} className={`blockH6 font-display`} />,
        ul: (props) => (
          <ul {...props} className='list-disc pl-[1em] ml-0 space-y-5' />
        ),
        ol: (props) => <ol {...props} className=' list-tick space-y-5' />,
        pageLink: (props) => (
          <SwitchLink {...props} className='btn-red w-max' />
        ),
        pageAnchorLink: (props) => (
          <SwitchLink {...props} className='btn-red w-max' />
        ),
        anchorLink: (props) => (
          <SwitchLink {...props} className='btn-red w-max cursor-pointer' />
        ),
        anchorLinkGroup: (props) => <AnchorLinkGroup {...props} className='' />,
        externalLink: (props) => (
          <a target='_blank' className='btn-red w-max' href={props.url}>
            {props.linkText}
          </a>
        ),
        quizButton: (props) => <Quiz {...props} />,
        figure: (props) => <SanityImage image={props} className='mx-auto' />,
        videoModal: (props) => <VideoButton {...props} />,
      }}
      className={cx(`${className} flex flex-col gap-y-4`, {
        'portable-text': true,
      })}
      {...props}
    />
  ) : null;
};
