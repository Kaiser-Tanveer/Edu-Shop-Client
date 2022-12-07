import React from 'react';
import AllProducts from './AllProducts/AllProducts';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <h2 className='pt-10 text-5xl text-center font-bold'><span className='text-secondary'>Welcome</span> to Edu-Shop</h2>
            <Banner />
            <AllProducts />
        </div>
    );
};

export default Home;