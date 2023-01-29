import React from 'react';
import { toast } from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import { HiOutlineHeart } from 'react-icons/hi';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';

const MyOrderCart = ({ product }) => {
    const navigation = useNavigation();
    const navigate = useNavigate();
    const { mail, message, productName, location, myAmount, img, phone, _id } = product;

    const list = {
        mail,
        message,
        productName,
        location,
        myAmount,
        img,
        phone
    }

    const removeHandler = (id) => {
        const proceed = window.confirm(`Are you sure to delete this Item?`);
        if (proceed) {
            fetch(`https://edushop-server.vercel.app/dashboard/myProducts/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        toast.success('Item Deleted Successfully!');
                        if (navigation.state === 'loading') {
                            return <Spinner />
                        }
                        navigate('/dashboard');
                    }
                    console.log(data);
                })
        }
    }

    const wishlistHandler = (list) => {
        fetch(`https://edushop-server.vercel.app/dashboard/wishlists`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(list)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged === true) {
                    toast.success('Product Added to Wishlist Successfully!');
                    navigate('/dashboard/wishlists');
                }
            })
    }
    return (
        <div className='my-10'>
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                    <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={img} alt="Set of travel chargers" />
                    <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">{productName}</h3>
                                <p className="text-sm text-gray-600">{mail}</p>
                                <p className="text-sm text-gray-600">{phone}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">{myAmount} ৳</p>
                                <p className="text-sm line-through text-gray-400">15.99 $</p>
                                <p className="text-sm font-serif text-gray-400">{location}</p>
                            </div>
                        </div>
                        <div className="flex text-sm justify-between gap-4 divide-x">
                            <button onClick={() => removeHandler(_id)} className="btn btn-sm btn-outline btn-error rounded-md py-0 shadow-lg">
                                <FaTrashAlt /> Remove
                            </button>
                            <button onClick={() => wishlistHandler(list)} className="btn btn-sm btn-outline btn-primary border-0 px-6 rounded-md py-0 shadow-lg">
                                <HiOutlineHeart className='text-xl' />
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            <div className="flex justify-end space-x-4">
                <Link to='/products'>
                    <button type="button" className="px-6 py-2 border rounded-md border-emerald-600">Back to shop
                    </button>
                </Link>
                <button type="button" className="px-6 py-2 border rounded-md bg-emerald-600 text-gray-50 border-emerald-600">
                    <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                </button>
            </div>
        </div>
    );
};

export default MyOrderCart;