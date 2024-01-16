import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx'

const Featured = () => {
    const sliders = [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
        },
    ];

    const [currentIdx, setCurrentIdx] = useState(2);

    const moveToNextSlide = (slideIdx) => {
        setCurrentIdx(slideIdx);
    }
    
    return (
        <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                style={{ backgroundImage: `url(${sliders[currentIdx].url})` }}
            ></div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer shadow-2xl'>
                <BsChevronCompactRight onClick={() => setCurrentIdx((currentIdx - 1 + sliders.length) % sliders.length)} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer shadow-lg'>
                <BsChevronCompactLeft onClick={() => setCurrentIdx((currentIdx + 1) % sliders.length)} />
            </div>

            <div className='flex top-4 justify-center py-2'>
                {
                    sliders.map((item, idx) => (
                        <div key={idx} className='text-2xl cursor-pointer' onClick={() => moveToNextSlide(idx)}>
                            <RxDotFilled />
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default Featured
