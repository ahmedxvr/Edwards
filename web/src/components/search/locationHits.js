import React from 'react';
import { connectHits } from 'react-instantsearch-dom';

const Hit = ({ name, secondName, addressLine, city, contact }) => {
  return (
    <div className='py-8 '>
      <h3 className='richH1'>{name}</h3>
      <div className='richH3'>
        <p>{secondName}</p>
        <p>{addressLine}</p>
        <p>{city}</p>
        <a href={`tel:${contact}`}>{contact}</a>
      </div>
    </div>
  );
};

const Hits = ({ hits }) => {
  return (
    <div className='mt-5 md:grid grid-cols-2 lg:grid-cols-3 gap-x-10'>
      {hits.length >= 1 ? (
        hits?.map((hit) => <Hit {...hit} />)
      ) : (
        <p className='richH3 col-start-1 col-span-full text-center translate-y-10'>
          No results found
        </p>
      )}
    </div>
  );
};

export const LocationHits = connectHits(Hits);
