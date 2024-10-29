import React, { useState } from 'react'

import { SanityImage } from '../sanity/sanityImage'
import { VideoLighthouse } from '../media/videoLighthouse'

import Play from '@svg/play.svg'

export const StoryCard = ({ video, blurb, category, heading, slug, thumbnail }) => {
    const [videoOpen, setVideoOpen] = useState(false)

    return (
        <>
            <div id={slug?.current} className='w-full'>
                {thumbnail && <div onClick={() => setVideoOpen(true)} className='rounded-3xl relative aspect-w-2 aspect-h-2 cursor-pointer overflow-hidden z-10'>
                    <SanityImage image={thumbnail} className='absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-all ease-in-out duration-300 z-1' />
                    <Play className='absolute w-14 md:w-28 h-28 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 pointer-events-none' />
                </div>}
                <div className='mt-8 flex flex-col gap-y-3'>
                    <span className='blockH7 text-red'>{category?.title}</span>
                    <h3 className='blockH2'>{heading}</h3>
                    <p className='blockH7'>{blurb}</p>
                </div>
            </div>

            {/* Video Modal */}
            {video && <VideoLighthouse video={video} isOpen={videoOpen} setIsOpen={setVideoOpen} />}
        </>
    )
}
