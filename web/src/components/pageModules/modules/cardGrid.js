import React from 'react';

import ModuleWrapper from '../moduleWrapper';
import { SymptomCard } from '@components/cards/symptomCard';

const CardGrid = ({ config, heading, subheading, cards }) => {
  return (
    <ModuleWrapper {...config}>
      <div className='px-gutter w-full flex flex-col items-center text-center '>
        <div className='w-full'>
          <h2 className='blockH1'>{heading}</h2>
          <p className='blockH5 mt-4'>{subheading}</p>
        </div>

        <div className='grid xl:grid-cols-2 mt-14 md:mt-24 items-center w-fit gap-x-[72px] gap-y-10 xl:gap-y-28'>
          {cards?.map((card, i) => (
            <SymptomCard key={i} {...card} />
          ))}
        </div>
      </div>
    </ModuleWrapper>
  );
};

export default CardGrid;
