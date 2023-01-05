import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Wishlist = () => {
    const lists = useLoaderData();
    console.log(lists);
    return (
        <div>
            <h2 className='text-4xl text-center font-bold text-error'>Wishlist</h2>
        </div>
    );
};

export default Wishlist;