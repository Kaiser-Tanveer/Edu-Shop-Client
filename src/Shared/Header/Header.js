import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineLogout, HiMenu, HiOutlineHome, HiOutlineLogin, HiOutlineClipboardList, HiOutlineUserCircle, HiOutlineShoppingCart, HiOutlineDocumentText } from 'react-icons/hi';
import logo from '../../Assets/Logos/eduShopLogo.png'
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const logOutHandler = () => {
        logOut()
            .then(() => { })
            .catch(err => {
                console.log(err);
            })
    }
    const menuItems = <>
    <NavLink 
        to='/' 
        className={({ isActive }) => `flex items-center text-xl m-2 mt-8 lg:text-base ${isActive ? 'text-[#ee9fbc] font-bold' : ''}`}
    >
        <HiOutlineHome className='lg:hidden' />
        <span className='ml-2'>Home</span>
    </NavLink>
    
    <NavLink 
        to='/products' 
        className={({ isActive }) => `flex items-center text-xl m-2 mt-8 lg:text-base ${isActive ? 'text-[#ee9fbc] font-bold' : ''}`}
    >
        <HiOutlineShoppingCart className='lg:hidden' />
        <span className='ml-2'>All Products</span>
    </NavLink>

    <NavLink 
        to='/dashboard' 
        className={({ isActive }) => `flex items-center text-xl m-2 mt-8 lg:text-base ${isActive ? 'text-[#ee9fbc] font-bold' : ''}`}
    >
        <HiOutlineDocumentText className='lg:hidden' />
        <span className='ml-2'>Dashboard</span>
    </NavLink>

    <NavLink 
        to='/blog' 
        className={({ isActive }) => `flex items-center text-xl m-2 mt-8 lg:text-base ${isActive ? 'text-[#ee9fbc] font-bold' : ''}`}
    >
        <HiOutlineClipboardList className='lg:hidden' />
        <span className='ml-2'>Blog</span>
    </NavLink>

    {
        !user ? (
            <NavLink 
                to='/logIn' 
                className={({ isActive }) => `flex items-center text-xl m-2 mt-8 lg:text-base text-blue-500 ${isActive ? 'font-bold' : ''}`}
            >
                <HiOutlineLogin className='lg:hidden' /> 
                <span className='ml-2'>Login</span>
            </NavLink>
        ) : (
            <NavLink 
                onClick={logOutHandler} 
                className="flex items-center text-xl m-2 mt-8 lg:text-base text-red-500"
            >
                <HiOutlineLogout className='lg:hidden' /> 
                <span className='ml-2'>Logout</span>
            </NavLink>
        )
    }
</>;

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
            <div className="hidden lg:flex items-center pb-5">
                <ul className="menu text-base-content menu-horizontal">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.photoURL ?
                        <Link className='flex items-center'>
                            <img src={user.photoURL} alt="" className='w-10 rounded-full' />
                        </Link>
                        :
                        <HiOutlineUserCircle className='text-2xl' />
                }
            </div>
        </div>
    );
};

export default Header;