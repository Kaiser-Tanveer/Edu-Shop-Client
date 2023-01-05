import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { HiHeart, HiLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import { toast } from 'react-hot-toast';

const WishCard = ({ list }) => {
    const { mail, productName, location, myAmount, img, phone, _id } = list;
    const navigate = useNavigate();
    const navigation = useNavigation();

    const removeHandler = (id) => {
        const proceed = window.confirm(`Are you sure to delete this Item?`);
        if (proceed) {
            fetch(`https://edushop-server.vercel.app/dashboard/wishlists/${id}`, {
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
        console.log(productName);
    }
    return (
        <div className='my-10 px-10 bg-cyan-200 rounded-lg pb-5 -shadow-lg'>
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                    <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={img} alt="Set of travel chargers" />
                    <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">{productName}</h3>
                                <p className="text-sm text-gray-600 flex items-center"><HiOutlineMail className='mr-1' /> {mail}</p>
                                <p className="text-sm text-gray-600 flex items-center"><HiOutlinePhone className='mr-1' /> {phone}</p>
                                <p className="text-sm font-serif flex items-center"><HiLocationMarker /> {location}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">{myAmount} ৳</p>
                                <p className="text-sm line-through text-gray-400">15.99 ৳</p>
                            </div>
                        </div>
                        <div className="flex text-sm justify-between gap-4 divide-x">
                            <button onClick={() => removeHandler(_id)} className="btn btn-sm btn-outline btn-error rounded-md py-0">
                                <FaTrashAlt />
                            </button>
                            <HiHeart className='text-2xl text-error' />
                        </div>
                    </div>
                </div>
            </li>
            <div className="flex justify-end space-x-4">
                <button type="button" className="px-6 py-2 border rounded-md border-emerald-600">Back
                    <Link to='/products'>to shop</Link>
                </button>
                <button type="button" className="px-6 py-2 border rounded-md bg-emerald-600 text-gray-50 border-emerald-600">
                    <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                </button>
            </div>
        </div>
    );
};

export default WishCard;