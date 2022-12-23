import React from 'react';
import { Bars } from 'react-loader-spinner';
import logo from '../../Assets/Logos/eduShopLogo.png';

const Spinner = () => {
    return (
        <div className='w-1/2 mx-auto h-[100vh]'>
            <div className='items-center mx-auto mt-32'>
                <img src={logo} alt="" className='flex mx-auto animate-ping' />
                <Bars
                    height="20vh"
                    width="50vw"
                    color="rgba(239, 159, 188)"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
                <h1 className='text-5xl text-cyan-200 font-bold text-center animate-pulse'>EduShop</h1>
            </div>
        </div>
    );
};

export default Spinner;