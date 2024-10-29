import React from 'react'

import ModuleWrapper from '../moduleWrapper'
import { IconCard } from '@components/cards/iconCard'

const CardBlock = ({ config, heading, subheading, cards }) => {
    return (
        <ModuleWrapper {...config}>
            <div className='px-gutter'>
                <div className='max-w-[863px] w-full mx-auto text-left md:text-center'>
                    <h2 className='richH0'>{heading}</h2>
                    <p className='richH2 mt-4'>{subheading}</p>
                </div>

                <div className='mt-12 md:mt-24 flex flex-col md:flex-row gap-y-10 items-center justify-center gap-x-6 lg:gap-x-12'>
                    {cards.map((card, i) => <IconCard key={i} {...card} />)}
                </div>
            </div>
        </ModuleWrapper>
    )
}

export default CardBlock