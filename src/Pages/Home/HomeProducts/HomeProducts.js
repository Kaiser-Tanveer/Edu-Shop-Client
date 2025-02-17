import React, { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import HomeProduct from './HomeProduct';

const HomeProducts = () => {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    fetch('https://edushop-server.vercel.app/homeProduct')
        .then(res => res.json())
        .then(data => setProducts(data));

    if (navigation.state === "loading") {
        return <Spinner />
    }
    return (
        <div className='w-5/6 container mx-auto'>
            <h2 className='text-3xl md:text-4xl text-center font-bold pt-10 pb-6'>Choose Your Product</h2>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group'>
                {
                    products.map(product => <HomeProduct
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default HomeProducts;