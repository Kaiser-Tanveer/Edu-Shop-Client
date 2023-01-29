import React from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { Zoom } from 'react-reveal';

const WhatWeHave = () => {
    return (
        <>
            <Zoom>
                <div className="px-4 my-24 py-16 mx-auto w-5/6 md:px-24 lg:px-8 lg:py-20 bg-gray-100 text-gray-800 shadow-lg">
                    <h2 className="mb-8 text-4xl font-bold leading-none text-center">What do we have to offer?</h2>
                    <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                        <li className="flex items-center space-x-2">
                            <HiOutlineCheckCircle className='text-xl text-green-500' />
                            <span>Books at a cheap price</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <HiOutlineCheckCircle className='text-xl text-green-500' />
                            <span>Classic Notebooks</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <HiOutlineCheckCircle className='text-xl text-green-500' />
                            <span>WorldClass pens</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <HiOutlineCheckCircle className='text-xl text-green-500' />
                            <span>Extraordinary pencils</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <HiOutlineCheckCircle className='text-xl text-green-500' />
                            <span>Quick service</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <HiOutlineCheckCircle className='text-xl text-green-500' />
                            <span>Home delivery</span>
                        </li>
                    </ul>
                </div>
            </Zoom>
        </>
    );
};

export default WhatWeHave;