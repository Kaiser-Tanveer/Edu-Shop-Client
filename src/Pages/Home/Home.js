import React from 'react';
import AllProducts from './AllProducts/AllProducts';
import Banner from './Banner/Banner';
import HomeProducts from './HomeProducts/HomeProducts';
import useTitle from '../../Component/CustomHooks/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <h2 className='pt-10 text-3xl md:text-5xl text-center font-bold'><span className='text-secondary'>Welcome</span> to Edu-Shop</h2>
            <Banner />
            <AllProducts />
            <HomeProducts />
        </div>
    );
};

export default Home;