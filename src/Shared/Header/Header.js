import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLogout, HiMenu, HiOutlineHome, HiOutlineLogin, HiOutlineClipboardList, HiOutlineUserCircle } from 'react-icons/hi';
import logo from '../../Assets/Logos/eduShopLogo.png'
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
    const menuItems = <>
        <Link to='/' className='flex items-center text-xl m-2 lg:text-base'><HiOutlineHome className='lg:hidden' /><span className='ml-2'>Home</span></Link>
        <Link to='/allProducts' className='flex items-center text-xl m-2 lg:text-base'><HiOutlineHome className='lg:hidden' /><span className='ml-2'>All Products</span></Link>
        <Link className="flex items-center text-xl m-2 lg:text-base"><HiOutlineClipboardList className='lg:hidden' /> <span className='ml-2'>Blog</span></Link>

        {
            !user ? <Link className="flex items-center text-xl m-2 lg:text-base text-primary"><HiOutlineLogin className='lg:hidden' /> <span className='ml-2'>Login</span></Link>
                :
                <Link className="flex items-center text-xl m-2 lg:text-base text-error"><HiOutlineLogout className='lg:hidden' /> <span className='ml-2'>Logout</span></Link>
        }
    </>
    return (
        <div className="navbar bg-white">
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
            </div>
        </div>
    );
};

export default Header;