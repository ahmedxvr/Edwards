import React, { useState, useRef } from 'react';
import {
  InstantSearch,
  connectStateResults,
  Configure,
} from 'react-instantsearch-dom';
import { searchClient } from '@lib/algolia';
import ModuleWrapper from '../moduleWrapper';
import { CustomSearchBox } from '@components/search/customSearchBox';
import { LocationHits } from '@components/search/locationHits';

const IndexResults = connectStateResults(
  ({ searchState, searchResults, children }) =>
    searchState.query && searchResults ? children : <></>
);

const EchoLocationBlock = ({ key, config, heading, subText }) => {
  const [hasSearchSubmitted, setHasSearchSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const resultsRef = useRef(null);
  const searchRef = useRef();

  const handleSearchSubmit = (e) => {
    if (searchRef.current.value === '') {
      e.preventDefault();
      setErrorMessage('Please enter a city');
      return;
    }
    setErrorMessage('');
    setHasSearchSubmitted(true);
    resultsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <ModuleWrapper {...config} key={key}>
      <InstantSearch searchClient={searchClient} indexName='echo-locations'>
        <div className='px-gutter lg:px-0 lg:grid grid-cols-14'>
          <h2 className='col-start-2 col-span-5  blockH1 mb-[30px]'>
            {heading}
          </h2>

          <p className='col-start-2 col-span-5 blockH5 text-black'>{subText}</p>

          <div className='col-start-9 col-end-14 mt-10 lg:mt-0 relative'>
            <span className='absolute top-[18px] right-8  text-red z-50 pointer-events-none'>
              {errorMessage}
            </span>
            <CustomSearchBox
              placeholder='Enter City'
              setHasSearchSubmitted={setHasSearchSubmitted}
              searchRef={searchRef}
            />
            <button
              onClick={handleSearchSubmit}
              className='btn-red mt-7'
              type='submit'
            >
              Find A location
            </button>
          </div>

          <div
            className='col-start-2 col-end-14 border-t-2 border-black/20 mt-14'
            ref={resultsRef}
          >
            <Configure hitsPerPage={50} />
            <IndexResults>
              {hasSearchSubmitted && <LocationHits />}
            </IndexResults>
          </div>
        </div>
      </InstantSearch>
    </ModuleWrapper>
  );
};

export default EchoLocationBlock;
