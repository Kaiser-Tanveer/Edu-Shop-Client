import React from 'react';
import { HiArrowCircleRight } from 'react-icons/hi';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import useTitle from '../../../Component/CustomHooks/useTitle';

const CatWiseProducts = () => {
    useTitle('Products');
    const navigation = useNavigation();
    const products = useLoaderData([]);

    if (navigation.state === 'loading') {
        return <Spinner />
    }
    return (
        <div className='w-5/6 my-32 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                products.map(product => <div className='relative rounded-lg bg-cyan-200 shadow-lg'>
                    <img src={product.img} alt="productImg" className='h-60 p-4 w-44 absolute z-10 left-1/4 border border-cyan-200 shadow-lg' />
                    <div className='w-full'>
                        <Link to={`/product/${product._id}`} className='btn btn-secondary text-xl rounded-md w-full font-semibold absolute bottom-0 z-30 shadow-lg'>DETAILS<HiArrowCircleRight className='ml-2' /></Link>
                    </div>
                    <div className='rounded-lg bg-white my-0 py-0 shadow-lg' style={{
                        clipPath: 'polygon(0 calc(55% - 0%), 100% calc(100% - 75%), 100% 100%, 0 100%)'
                    }}>
                        <div className="card shadow-xl">
                            <figure></figure>
                            <div className="card-body pt-64">
                                <h2 className="card-title justify-center">
                                    {product.name}
                                    {
                                        product.badge &&
                                        <div className="badge badge-secondary">{product.badge}</div>
                                    }
                                </h2>
                                <p>{product.detail}</p>
                                <div className="card-actions justify-center">
                                    <h2 className='card-title pb-6'>
                                        Price: ৳{product.price}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CatWiseProducts;