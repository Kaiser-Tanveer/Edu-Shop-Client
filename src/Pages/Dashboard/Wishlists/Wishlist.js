import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import WishCard from './WishCard';

const Wishlist = () => {
    const navigation = useNavigation();
    const lists = useLoaderData();
    console.log(lists);

    if (navigation.state === 'loading') {
        return <Spinner />
    }
    return (
        <div className='h-[100vh]'>
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-50 text-gray-800 shadow-lg">
                <h2 className="text-4xl text-center font-bold text-error">Wishlist</h2>
                <ul className="flex flex-col divide-y divide-gray-300">
                    {
                        lists.map(list => <WishCard
                            key={list._Id}
                            list={list}
                        />)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Wishlist;