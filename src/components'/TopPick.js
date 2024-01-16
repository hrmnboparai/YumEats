import React from 'react'
import { topPicks } from '../data/data';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TopPick = () => {
    return (
        <div className='max-w-[1520px]'>
            <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Top Picks</h1>

            <div className='hidden lg:flex mx-w-[1520px] m-auto py-2 px-2'>
                <Splide options={{ perPage: 4, gap: "0.75rem", grap: 'free', touch: true, arrows: false }}>
                    {
                        topPicks.map((item, idx) => {
                            return (
                                <SplideSlide key={idx}>
                                    <div className='rounded-3xl relative'>
                                        <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white p-2'>
                                            <p className='px-2'>{item.title}</p>
                                            <p className='px-2 pt-2 font-bold text-2xl'>{item.price}</p>
                                            <button className='absolute border-dotted border-white text-white mx-2 bottom-4'>Add To Cart</button>
                                        </div>
                                        <img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300'
                                            src={item.img}
                                            alt={item.title}
                                        />
                                    </div>
                                </SplideSlide>
                            );
                        })
                    }
                </Splide>
            </div>
        </div>
    )
}

export default TopPick