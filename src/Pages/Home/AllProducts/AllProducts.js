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
            <h2 className='text-3xl md:text-5xl text-center font-bold pb-6'>Pick your category</h2>
            <div className='grid grid-cols-4 gap-5'>
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