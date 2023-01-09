import React from 'react';
import logo from '../../Assets/Logos/eduShopLogo.png';
import { Link } from 'react-router-dom';
import { HiOutlineHome } from 'react-icons/hi';

const NotFound = () => {
    return (
        <div>
            <h1 className='flex text-8xl text-error font-bold justify-center mt-[30vh]'>
                <span>4</span>
                <img src={logo} alt="" className='text-5xl rounded-full border-2 mx-4 border-error shadow-lg' />
                <span>4</span>
            </h1>
            <h2 className='text-4xl font-bold text-center mt-5'>Sorry, we couldn't find this page.</h2>
            <div className='flex justify-center mt-6'>
                <Link to='/' className='btn btn-outline btn-error rounded-md'>Back to Home <HiOutlineHome className='text-xl ml-2' /> </Link>
            </div>
        </div>
    );
};

export default NotFound;