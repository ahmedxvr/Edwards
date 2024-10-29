import React from 'react'

import { SimplePortableText } from '../sanity/simplePortableText'

export const Content = ({ content, author, date }) => {
    return (
        <div className="bg-grey pb-36 lg:pb-44 pt-10 lg:pt-36 grid grid-cols-14">
            <div className='col-start-2 col-end-14 lg:col-end-5 mr-8'>
                <div className='blockH8 text-[#818181]'>
                    {date && <span className='block'>Posted on {date}</span>}
                    {author && <span className='block mt-2 lg:mt-3'>By {author}</span>}
                </div>
            </div>
            <div className='pt-12 lg:pt-0 col-start-2 lg:col-start-5 col-end-14'>
                {content && <SimplePortableText text={content} />}
            </div>
        </div>
    )
}
