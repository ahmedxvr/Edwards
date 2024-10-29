import React from 'react'

import ModuleWrapper from '../moduleWrapper'
import { SoundCard } from '../../cards/soundCard'

const SoundCards = ({ config, heading, cards }) => {
    return (
        <ModuleWrapper {...config}>
            <div className='px-gutter text-center'>
                <h2 className='blockH1'>{heading}</h2>
                <div className='flex flex-col md:flex-row gap-y-12 gap-x-14 justify-center items-center mt-16 md:mt-24'>
                    {cards.map((card, i) => <SoundCard key={i} {...card} />)}
                </div>
            </div>
        </ModuleWrapper>
    )
}

export default SoundCards