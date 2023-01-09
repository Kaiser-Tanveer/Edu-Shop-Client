import React from 'react';
import AllProducts from './AllProducts/AllProducts';
import Banner from './Banner/Banner';
import HomeProducts from './HomeProducts/HomeProducts';
import useTitle from '../../Component/CustomHooks/useTitle';
import { Zoom } from 'react-reveal';
import WhatWeHave from './WhatWeHave/WhatWeHave';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Zoom>
                <h2 className='pt-10 text-3xl md:text-5xl text-center font-bold'><span className='text-secondary'>Welcome</span> <span className='text-cyan-200'>to Edu-Shop</span></h2>
            </Zoom>
            <Banner />
            <AllProducts />
            <HomeProducts />
            <WhatWeHave />
        </div>
    );
};

export default Home;