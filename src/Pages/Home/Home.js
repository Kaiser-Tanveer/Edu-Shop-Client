import React from 'react';
import AllProducts from './AllProducts/AllProducts';

const Home = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <h1 className='text-5xl font-bold text-center py-5'><span className='text-orange-500'>Welcome</span> to Edu-Shop</h1>
            <AllProducts />
        </div>
    );
};

export default Home;