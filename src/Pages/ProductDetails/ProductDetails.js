import React, { useState } from 'react';
import { FaExclamationTriangle, FaShoppingBasket } from 'react-icons/fa';
import { HiOutlineBadgeCheck, HiOutlineShoppingCart } from 'react-icons/hi';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Spinner from '../Spinner/Spinner';

const ProductDetails = () => {
    const product = useLoaderData({});
    const navigation = useNavigation();
    const [quantity, setQuantity] = useState(1);
    const [warning, setWarning] = useState(null);

    const [goods, setGoods] = useState(product);

    const { name, detail, img, price, badge, _id } = product;
    const myAmount = quantity * price;

    const warningHandler = () => {
        if (myAmount === 0) {
            setWarning("Please input a valid quantity")
        }
    }
    if (navigation.state === "loading") {
        return <Spinner />
    }
    return (
        <section className="hero min-h-screen lg:w-5/6 mx-auto">
            <div className="hero-content flex-col lg:flex-row lg:gap-20 mx-2">
                <img src={img} alt='productImg' className="h-[70vh] rounded-lg shadow-2xl" />
                <div className='relative lg:w-1/2 p-5 lg:p-10 mx-auto rounded-lg bg-cyan-200 shadow-lg'>
                    {
                        badge &&
                        <p className='badge badge-secondary shadow-lg absolute top-0 left-0'>{badge}</p>
                    }
                    <h4 className="text-xl font-semibold flex items-center pt-5">Price: <span className='text-error ml-2'>{price}</span> BDT</h4>
                    <h1 className="text-2xl lg:text-3xl font-bold flex items-center"><HiOutlineBadgeCheck />{name}</h1>
                    <p className="py-6 lg:w-5/6 mx-auto">{detail}</p>
                    <div className='flex justify-between items-center mx-auto lg:w-5/6 pb-10'>
                        <div>
                            <h4 className="text-xl font-semibold flex items-center">Total</h4>
                            <h5 className='font-bold text-error border border-gray-100 px-2'> {myAmount} BDT</h5>
                        </div>
                        <div className='text-center'>
                            <h4 className='text-xl font-semibold pb-2'>Quantity</h4>
                            <div className='flex font-bold items-center'>
                                <p onClick={() => setQuantity((parseInt(quantity)) - 1)} className='badge badge-secondary px-2 rounded-sm mx-2 text-xl cursor-pointer'>-</p>
                                <p className='w-10 border border-secondary rounded-md'>{quantity}</p>
                                <p onClick={() => {
                                    setQuantity(parseInt(quantity) + 1)
                                }} className='badge badge-secondary rounded-sm mx-2 text-xl cursor-pointer'>+</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between lg:w-5/6 mx-auto'>
                        <label htmlFor="cart-modal" onClick={warningHandler} className="btn btn-error btn-outline rounded-md">ADD TO CART <HiOutlineShoppingCart className='ml-2' /></label>
                        <button className="btn btn-secondary rounded-md">PURCHASE <FaShoppingBasket className='ml-2' /></button>
                    </div>
                </div>
                {
                    warning && myAmount === 0 &&
                    <p className='text-warning border-2 border-error px-2 md:py-2 md:text-2xl lg:text-xl flex items-center absolute -bottom-1/2 mb-20 md:bottom-0 md:-mb-20 md:h-10 lg:top-3/4 lg:mt-[18px] lg:left-1/2 rounded-sm'><FaExclamationTriangle className='mr-2 text-error' /><span>{warning}</span></p>
                }
            </div>
            {
                quantity >= 1 &&
                <BookingModal
                    key={_id}
                    myAmount={myAmount}
                    goods={goods}
                    setGoods={setGoods}
                    setQuantity={setQuantity}
                />
            }
        </section>
    );
};

export default ProductDetails;