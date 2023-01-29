import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import Product from './Product';
import useTitle from '../../Component/CustomHooks/useTitle';
import Shake from 'react-reveal/Shake';

const Products = () => {
    useTitle('All Products');

    const navigation = useNavigation();
    const products = useLoaderData([]);

    if (navigation.state === 'loading') {
        return <Spinner />
    }
    return (
        <>
            <Shake>
                <h2 className='text-error text-3xl md:text-5xl font-bold text-center pt-10 pb-6'>Choice Your Product</h2>
            </Shake>
            <div className='w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 group'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </>
    );
};

export default Products;