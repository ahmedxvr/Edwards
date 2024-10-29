import React, { useState } from 'react'

import ModuleWrapper from '../moduleWrapper'
import { SanityImage } from '@components/sanity/sanityImage'
import { VideoLighthouse } from '../../media/videoLighthouse'

import Play from '@svg/play.svg'

const VideoBlock = ({ config, heading, subheading, video, thumbnail }) => {
    const [videoOpen, setVideoOpen] = useState(false)

    return (
        <>
            <ModuleWrapper {...config}>
                <div className='grid grid-cols-14 text-center'>
                    <div className='col-start-2 lg:col-start-3 col-end-14 lg:col-end-13'>
                        <h2 className='richH0'>{heading}</h2>
                        <p className='richH2 mt-4'>{subheading}</p>
                        {video && <button className='btn-red mt-8' onClick={() => setVideoOpen(true)}>Play Video</button>}
                    </div>
                    {thumbnail && <div onClick={() => setVideoOpen(true)} className='col-start-2 lg:col-start-3 col-end-14 lg:col-end-13 mt-16 lg:mt-24'>
                        <div className='cursor-pointer relative overflow-hidden rounded-3xl flex items-center justify-center'>
                            <SanityImage image={thumbnail} />
                            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-20' />
                            <Play className='absolute w-14 md:w-28' />
                        </div>
                    </div>}
                </div>
            </ModuleWrapper>

            {/* Video Modal */}
            {video && <VideoLighthouse video={video} isOpen={videoOpen} setIsOpen={setVideoOpen} />}
        </>
    )
}

export default VideoBlock