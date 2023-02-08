import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';

const Checkout = () => {
    const navigation = useNavigation();
    const checkedProducts = useLoaderData();

    if (navigation.state === 'loading') {
        return <Spinner />
    }
    return (
        <>
            <h2 className='text-3xl text-center text-error font-bold py-6'>Checkout Confirmation</h2>
            {
                checkedProducts.map(checkedProduct =>
                    <div
                        key={checkedProduct._id}
                        className='card shadow-lg my-10 shadow-error w-[80vw] lg:w-72 bg-cyan-200 border border-error p-10'>
                        <div className='text-2xl font-semibold text-error-content text-center'>
                            {checkedProduct?.productName}
                        </div>
                        <div className='card-body'>
                            <img src={checkedProduct?.img} alt="sample-image" />
                            <h2 className='text-xl font-bold text-center text-error'>Price: {checkedProduct?.myAmount}</h2>
                        </div>
                        <button className='w-full border border-secondary-focus bg-gradient-to-r from-error to-cyan-500 p-2 rounded-md text-white text-xl uppercase font-semibold hover:scale-110 shadow-lg'>
                            Pay
                        </button>
                    </div>
                )
            }

        </>
    );
};

export default Checkout;