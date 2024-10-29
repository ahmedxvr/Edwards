import React from 'react'

import SwitchLink from '@components/links/switchLink'
import { SimplePortableText } from '@components/sanity/simplePortableText'
import { SanityImage } from '@components/sanity/sanityImage'

export const IconCard = ({ icon, cardText, link }) => {
    return (
        <div className='mx-auto md:mx-0 max-w-[430px] w-full bg-white rounded-3xl px-8 py-14 flex flex-col justify-between self-stretch gap-y-16'>
            {cardText && <SimplePortableText text={cardText} />}
            {icon && <SanityImage image={icon} className='mx-auto' />}
            {link[0] && <SwitchLink {...link[0]} className='btn-red-blue w-max mx-auto' />}
        </div>
    )
}
