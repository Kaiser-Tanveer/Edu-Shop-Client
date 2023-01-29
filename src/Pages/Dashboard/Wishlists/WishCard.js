import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { HiHeart, HiLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Zoom } from 'react-reveal';

const WishCard = ({ list }) => {
    const { mail, productName, location, myAmount, img, phone, _id } = list;
    const navigate = useNavigate();

    const deleteHandler = (id) => {
        const proceed = window.confirm(`Remove this Item from Wishlist!`);
        if (proceed) {
            fetch(`https://edushop-server.vercel.app/dashboard/wishlists/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        toast.success('Item removed Successfully!');
                        navigate('/dashboard/wishlists');
                    }
                    console.log(data);
                })
        }
    }
    return (
        <Zoom>
            <div className='my-10 px-10 bg-cyan-200 rounded-lg pb-5 -shadow-lg'>
                <h3 className="text-lg font-semibold leading-snug sm:pr-8 pt-6 pb-4 text-center">{productName}</h3>
                <li className="flex flex-col pb-6 sm:flex-row sm:justify-between">
                    <div className="md:flex w-full space-x-2 sm:space-x-4">
                        <img className="flex-shrink-0 object-cover mx-auto w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={img} alt="Set of Products" />
                        <div className="flex flex-col justify-between w-full pb-4">
                            <div className="md:flex justify-between w-full pb-2">
                                <div className="space-y-1">
                                    <p className="text-sm text-gray-600 flex items-center"><HiOutlineMail className='mr-1' /> {mail}</p>
                                    <p className="text-sm text-gray-600 flex items-center"><HiOutlinePhone className='mr-1' /> {phone}</p>
                                    <p className="text-sm font-serif flex items-center"><HiLocationMarker /> {location}</p>
                                </div>
                                <div className="md:text-right">
                                    <p className="text-lg font-semibold">{myAmount} ৳</p>
                                </div>
                            </div>
                            <div className="flex text-sm justify-between gap-4 divide-x">
                                <button onClick={() => deleteHandler(_id)} className="btn btn-sm btn-outline btn-error rounded-md border-none py-0">
                                    <FaTrashAlt />
                                </button>
                                <HiHeart className='text-2xl text-error' />
                            </div>
                        </div>
                    </div>
                </li>
                <div className="flex justify-between md:justify-end space-x-4">
                    <Link to='/products'>
                        <button type="button" className="p-2 border rounded-md border-emerald-600">Back to shop
                        </button>
                    </Link>
                    <button type="button" className="p-2 border rounded-md bg-emerald-600 text-gray-50 border-emerald-600">
                        <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                    </button>
                </div>
            </div>
        </Zoom>
    );
};

export default WishCard;