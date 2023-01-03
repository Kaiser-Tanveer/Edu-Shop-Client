import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { HiOutlineHeart } from 'react-icons/hi';

const MyProductCart = ({ product }) => {
    const { mail, message, productName, location, myAmount, img, phone } = product;
    return (
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
                <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={img} alt="Set of travel chargers" />
                <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">{productName}</h3>
                            <p className="text-sm text-gray-600">Black</p>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-semibold">{myAmount} ৳</p>
                            <p className="text-sm line-through text-gray-400">15.99 ৳</p>
                        </div>
                    </div>
                    <div className="flex text-sm justify-between gap-4 divide-x">
                        <button className="btn btn-sm btn-outline btn-error rounded-md py-0">
                            <FaTrashAlt /> Remove
                        </button>
                        <button className="btn btn-sm btn-outline bg-cyan-200 rounded-md py-0">
                            <HiOutlineHeart />Add to favorites
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default MyProductCart;