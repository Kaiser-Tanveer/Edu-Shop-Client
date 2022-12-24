import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineLogout, HiMenu, HiOutlineHome, HiOutlineLogin, HiOutlineClipboardList, HiOutlineUserCircle, HiOutlineMenu, HiOutlineShoppingCart, HiOutlineDocumentText } from 'react-icons/hi';
import logo from '../../Assets/Logos/eduShopLogo.png'
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
    const menuItems = <>
        <NavLink to='/' className='flex items-center text-xl m-2 mt-8 lg:text-base'><HiOutlineHome className='lg:hidden' /><span className='ml-2'>Home</span></NavLink>
        <NavLink to='/products' className='flex items-center text-xl m-2 mt-8 lg:text-base'><HiOutlineShoppingCart className='lg:hidden' /><span className='ml-2'>All Products</span></NavLink>
        <NavLink to='/dashboard' className='flex items-center text-xl m-2 mt-8 lg:text-base'><HiOutlineDocumentText className='lg:hidden' /><span className='ml-2'>Dashboard</span></NavLink>
        <NavLink className="flex items-center text-xl m-2 mt-8 lg:text-base"><HiOutlineClipboardList className='lg:hidden' /> <span className='ml-2'>Blog</span></NavLink>

        {
            !user ? <NavLink to='/logIn' className="flex items-center text-xl m-2 mt-8 lg:text-base text-primary"><HiOutlineLogin className='lg:hidden' /> <span className='ml-2'>Login</span></NavLink>
                :
                <NavLink className="flex items-center text-xl m-2 mt-8 lg:text-base text-error"><HiOutlineLogout className='lg:hidden' /> <span className='ml-2'>Logout</span></NavLink>
        }
    </>
    return (
        <div className="navbar bg-cyan-200 p-0 pr-5 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <HiMenu className='text-2xl' />
                    </label>
                    <ul tabIndex={0} className="menu -ml-2 duration-1000 h-[100vh] w-[50vw] menu-compact dropdown-content mt-3 p-2 shadow-xl bg-white z-10">
                        {menuItems}
                    </ul>
                </div>
                <Link className="text-xl"><img src={logo} alt="" /></Link>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu text-base-content menu-horizontal">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className='flex items-center'>
                    {
                        user?.photoURL ? <img src={user.photoURL} alt="" />
                            :
                            <HiOutlineUserCircle className='text-2xl' />
                    }
                    <span className='ml-2'>{user?.name}</span>
                </Link>

                <label htmlFor="dashboard-drawer" className="btn btn-ghost drawer-button lg:hidden"><HiOutlineMenu /></label>
            </div>
        </div>
    );
};

export default Header;