import React from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import MyProductCart from './MyProductCart';

const MyProducts = () => {
    const navigation = useNavigation();
    const products = useLoaderData();

    if (navigation.state === 'loading') {
        return <Spinner />
    }
    return (
        <div>
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-50 text-gray-800">
                <h2 className="text-xl font-semibold">Your cart</h2>
                <ul className="flex flex-col divide-y divide-gray-300">
                    {
                        products.map(product => <MyProductCart
                            key={product._id}
                            product={product}
                        />)
                    }
                </ul>
                <div className="flex justify-end space-x-4 pt-32">
                    <button type="button" className="px-6 py-2 border rounded-md border-emerald-600">Back
                        <Link to='/products'>to shop</Link>
                    </button>
                    <button type="button" className="px-6 py-2 border rounded-md bg-emerald-600 text-gray-50 border-emerald-600">
                        <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;