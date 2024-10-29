import React from 'react'
import useEmblaCarousel from "embla-carousel-react";
import cx from 'classnames'

import { SanityImage } from '@components/sanity/sanityImage';

import Arrow from '@svg/arrow.svg'

const Navigation = ({ scrollNext, scrollPrev, prevBtnEnabled, nextBtnEnabled }) => {

    return (
        <div className='flex gap-x-6 justify-center mt-12 lg:mt-0 lg:justify-end'>
            <button onClick={() => scrollPrev()} className={cx('rotate-180 max-w-[50px] lg:max-w-[60px] w-full transition-all ease-in-out duration-300', {
                'opacity-50': !prevBtnEnabled,
            })}><Arrow className='w-full' /></button>
            <button onClick={() => scrollNext()} className={cx('max-w-[50px] lg:max-w-[60px] w-full transition-all ease-in-out duration-300', {
                'opacity-50': !nextBtnEnabled,
            })}><Arrow className='w-full' /></button>
        </div>
    )
}

export const ImageTextCard = ({ mobileImages }) => {
    /* Carousel & button handling */
    const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = React.useState(false);

    const [viewportRef, embla] = useEmblaCarousel({
        containScroll: true,
        align: 'start',
        dragFree: true,
    });

    const onSelect = React.useCallback(() => {
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    const scrollPrev = React.useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = React.useCallback(() => embla && embla.scrollNext(), [embla]);

    React.useEffect(() => {
        if (!embla) return;
        onSelect();
        embla.on('select', onSelect);
    }, [embla, onSelect]);

    return (
        <div className='lg:hidden px-gutter'>
            <div className='mt-4'>
                <div ref={viewportRef}>
                    <div className="flex flex-row gap-x-6 items-center">
                        {mobileImages?.map((img, i) => <div style={{ flex: '0 0 auto' }} className={cx('rounded-3xl overflow-hidden relative z-10', {
                            'w-[300px]': mobileImages.length > 1,
                            'w-full': mobileImages.length === 1,
                        })}>
                            <SanityImage key={i} image={img} className='w-full' />
                        </div>)}
                    </div>
                </div>
            </div>

            {mobileImages.length > 1 && <Navigation scrollNext={scrollNext} scrollPrev={scrollPrev} prevBtnEnabled={prevBtnEnabled} nextBtnEnabled={nextBtnEnabled} />}
        </div>
    )
}
