import React from 'react';
import shopBG from '../../../Assets/Backgrounds/shoppingBG.png';
import { FaShopify } from 'react-icons/fa'

const Banner = () => {
    return (
        <div className='my-10 shadow-lg rounded-lg relative'>
            <div>
                <h2 className='text-5xl font-bold text-cyan-300 text-center lg:text-left z-10 absolute md:left-1/3 lg:left-1/2 lg:top-1/4' style={{ WebkitTextStroke: '1px rgba(239, 159, 188)' }}>Buy Educational <br /> Accessories <br /> Here</h2>
            </div>
            <div className='absolute left-1/4 md:left-1/2 top-2/3 z-30'>
                <button className='btn btn-secondary shadow-lg font-semibold border md:border-none border-cyan-300'>VISIT SHOP <FaShopify className='ml-2' /> </button>
            </div>
            <div className='rounded-lg bg-secondary grid grid-cols-1 md:grid-cols-2 h-80 md:h-full' style={{
                clipPath: 'polygon(0 0, 100% calc(100% - 100vw), calc(100% - 50vw) 100%, 0 100%)'
            }}>
                <div className='w-full'>
                    <img src={shopBG} className="mt-14 w-full hidden md:block" alt="" />
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Banner;