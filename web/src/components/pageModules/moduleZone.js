import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

const ImageText = loadable(() => import('./modules/imageText'));
const PageBanner = loadable(() => import('./modules/pageBanner'));
const CardGrid = loadable(() => import('./modules/cardGrid'));
const CardBlock = loadable(() => import('./modules/cardBlock'));
const SoundCards = loadable(() => import('./modules/soundCards'));
const VideoBlock = loadable(() => import('./modules/videoBlock'));
const HalfBanner = loadable(() => import('./modules/halfBanner'));
const StoryBlock = loadable(() => import('./modules/storyBlock'));
const AccordionSet = loadable(() => import('./modules/accordionSet'));
const JourneyPopup = loadable(() => import('./modules/journeyPopup'));
const SingleColText = loadable(() => import('./modules/singleColText'));
const TwoColText = loadable(() => import('./modules/twoColText'));
const FormBlock = loadable(() => import('./modules/formBlock'));
const QuoteBlock = loadable(() => import('./modules/quoteBlock'));
const EchoLocationBlock = loadable(() => import('./modules/echoLocationBlock'));

const ModuleZone = ({ modules }) => {
  const component = modules?.map((item, i) => {
    switch (item?._type) {
      case 'imageText':
        return <ImageText key={i} {...item} />;
      case 'pageBanner':
        return <PageBanner key={i} {...item} />;
      case 'cardGrid':
        return <CardGrid key={i} {...item} />;
      case 'cardBlock':
        return <CardBlock key={i} {...item} />;
      case 'soundCards':
        return <SoundCards key={i} {...item} />;
      case 'videoBlock':
        return <VideoBlock key={i} {...item} />;
      case 'halfBanner':
        return <HalfBanner key={i} {...item} />;
      case 'storyBlock':
        return <StoryBlock key={i} {...item} />;
      case 'accordionSet':
        return <AccordionSet key={i} {...item} />;
      case 'journeyPopup':
        return <JourneyPopup key={i} {...item} />;
      case 'singleColText':
        return <SingleColText key={i} {...item} />;
      case 'twoColText':
        return <TwoColText key={i} {...item} />;
      case 'formBlock':
        return <FormBlock key={i} {...item} />;
      case 'quoteBlock':
        return <QuoteBlock key={i} {...item} />;
      case 'echoLocationBlock':
        return <EchoLocationBlock key={i} {...item} />;
      default:
        return null;
    }
  });
  return <>{component}</>;
};

ModuleZone.propTypes = {
  modules: PropTypes.array.isRequired,
};

export default ModuleZone;
