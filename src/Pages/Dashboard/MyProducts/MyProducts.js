import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import MyProductCart from './MyProductCart';

const MyProducts = () => {
    const navigation = useNavigation();
    const products = useLoaderData();

    if (navigation.state === 'loading') {
        return <Spinner />
    }
    return (
        <div className='h-[100vh]'>
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-50 text-gray-800 shadow-lg">
                <h2 className="text-4xl text-center font-bold text-error">My Orders</h2>
                <ul className="flex flex-col divide-y divide-gray-300">
                    {
                        products.map(product => <MyProductCart
                            key={product._id}
                            product={product}
                        />)
                    }
                </ul>
            </div>
        </div>
    );
};

export default MyProducts;