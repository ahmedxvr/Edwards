import React, { useRef, useEffect } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

const SearchBox = ({
  currentRefinement,
  refine,
  placeholder,
  setHasSearchSubmitted,
  searchRef,
}) => {
  return (
    <div className='relative group'>
      <input
        type='text'
        name='search'
        ref={searchRef}
        value={currentRefinement}
        onChange={(event) => {
          refine(event.currentTarget.value);
          setHasSearchSubmitted(false);
        }}
        placeholder=' '
        required='true'
        className='text-black pl-6 placeholder:text-[#828282] rounded-[50px]   blockH7 search-field  focus:outline-none bg-white border border-black focus:shadow-none form-input focus:ring-0 focus:border focus:border-black w-full py-4 peer'
      />
      <label
        for='search'
        className='peer-focus:font-medium absolute blockH7 text-darkGrey/80  duration-300 transform -translate-y-12 scale-75 left-0 top-4 z-10 origin-[0] peer-focus:left-0 peer-focus:text-darkGrey/80   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-12 px-8 pointer-events-none'
      >
        {placeholder}
      </label>
    </div>
  );
};

export const CustomSearchBox = connectSearchBox(SearchBox);
