import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight, HiOutlineGift, HiOutlineShoppingBag } from 'react-icons/hi';

const DashboardLayout = () => {
    const [clicked, setClicked] = useState(false);
    const drawerHandler = () => {
        setClicked(!clicked);
    }
    console.log(clicked);
    return (
        <>
            <label onClick={drawerHandler} htmlFor="dashboard-drawer" className="py-0 z-50 bg-transparent relative btn btn-ghost drawer-button lg:hidden">
                {
                    clicked === false ?
                        <HiOutlineArrowCircleRight className='absolute text-3xl text-cyan-200 rounded-full border-r-2 -ml-4' />
                        :
                        <HiOutlineArrowCircleLeft className='z-50 absolute text-3xl text-cyan-200 rounded-full border-l-2 ml-[420px] -mb-20' />
                }
            </label>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 lg:w-80 bg-white text-base-content">
                        <li className='font-semibold'><Link to='/dashboard'><HiOutlineShoppingBag className='text-xl' /> My Orders</Link></li>
                        <li className='font-semibold'><Link to='/dashboard/wishlists'><HiOutlineGift className='text-xl' /> My WishList</Link></li>
                        <li className='font-semibold'><Link to='/dashboard/myProducts'><HiOutlineGift className='text-xl' /> My Products</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;