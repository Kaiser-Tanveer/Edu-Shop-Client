import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { HiOutlineGift, HiOutlineShoppingBag } from 'react-icons/hi';

const DashboardLayout = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 lg:w-80 bg-white text-base-content">
                    <li className='font-semibold'><Link to='/dashboard/myProducts'><HiOutlineShoppingBag className='text-xl' /> My Products</Link></li>
                    <li className='font-semibold'><Link><HiOutlineGift className='text-xl' /> My WishList</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;