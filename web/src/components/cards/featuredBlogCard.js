import React from 'react'
import { Link } from 'gatsby'

import { SanityImage } from '@components/sanity/sanityImage'

export const FeaturedBlogCard = ({ feautuedImage, excerpt, date, title, slug }) => {
    return (
        <div className='mx-gutter lg:mx-16 bg-white rounded-3xl py-gutter lg:py-10 px-gutter lg:px-8 lg:grid grid-cols-12'>
            <div className='col-start-1 col-end-8'>
                <div className='relative aspect-w-4 aspect-h-3 w-full overflow-hidden rounded-xl z-10'>
                    {feautuedImage && <Link to={`/${slug?.current}`}><SanityImage image={feautuedImage} className='absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-all ease-in-out duration-300 z-1' /></Link>}
                </div>
            </div>
            <div className='col-start-8 col-end-13'>
                <div className='lg:pl-16 lg:pr-8 mt-8 lg:mt-0 flex flex-col gap-y-5 item-center justify-center h-full'>
                    <span className='blockH7'>{date}</span>
                    <h2 className='blockH4'>{title}</h2>
                    <p className='blockH7'>{excerpt}</p>
                    <Link to={`/${slug?.current}`} className='btn-red-blue w-max'>Read Article</Link>
                </div>
            </div>
        </div>
    )
}
