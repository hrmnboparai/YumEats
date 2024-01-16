import React from 'react'
import { mealData } from '../data/data';
import { useState } from 'react';
import { ArrowSmRightIcon } from '@heroicons/react/outline'

const Meal = () => {
    const [foods, setFood] = useState(mealData);

    const filtercategory = (category) => {
        setFood(
            mealData.filter((item) => {
                return item.category == category;
            })
        )
    };

    return (
        <div className='max-w-[1520px] px-4 py-12 m-auto'>
            <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>
                Our Meals
            </h1>

            <div className='flex flex-col lg:flex-row justify-center'>
                <div className='flex justify-center md:justify-center'>
                    <button onClick={() => setFood(mealData)}
                        className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700'>
                        All
                    </button>
                    <button onClick={() => filtercategory("pizza")}
                        className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700'>
                        Pizza
                    </button>
                    <button onClick={() => filtercategory("chicken")}
                        className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700'>
                        Chicken
                    </button>
                    <button onClick={() => filtercategory("salad")}
                        className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700'>
                        Salade
                    </button>
                </div>
            </div>

            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
                {
                    foods.map((item) => (
                        <div key={item.id} className='border-none hover:scale-105 duration-300'>
                            <img
                                src={item.image}
                                alt={item.image}
                                className='w-full h-[200px] object-cover rounded-lg' />

                            <div className='flex justify-between py-2 px-2'>
                                <p className='font-bold'>
                                    {item.name}
                                </p>
                                <p className='bg-orange-700 h-18 w-18 rounded-full text-white -mt-10 py-3 px-2 border-8 font-bold'>
                                    {item.price}
                                </p>
                            </div>

                            <div className='pl-2 py-4 -mt-6'>
                                <p className='flex items-center text-indigo-600 cursor-pointer'>
                                    View More
                                    <ArrowSmRightIcon className='w-5 ml-2' />
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Meal