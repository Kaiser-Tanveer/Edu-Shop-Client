import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import ProductMenu from './ProductMenu';
import useTitle from '../../../Component/CustomHooks/useTitle';

const AllProducts = () => {
    useTitle('All Products');
    const navigation = useNavigation();
    const categories = useLoaderData([]);

    if (navigation.state === 'loading') {
        return <Spinner />
    }
    return (
        <>
            <h2 className='ml-[8.3%] w-5/6 mx-auto text-3xl text-center md:text-4xl font-bold pb-6'>Pick your category</h2>
            <div className='grid grid-cols-4 gap-5 bg-gray-300 shadow-2xl'>
                {
                    categories.map(category => <ProductMenu
                        key={category._id}
                        category={category}
                    />
                    )
                }
            </div>
        </>
    );
};

export default AllProducts;