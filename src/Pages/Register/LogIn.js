import React from 'react';
import { FaFacebook, FaGoogle, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const submitHandler = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    }
    return (
        <div className='lg:w-5/6 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            <div className='w-3/4 mx-auto py-20'>
                <h2 className="text-5xl text-secondary text-center font-bold">Welcome!!</h2>
                <p className='py-6 text-center text-xl text-gray-600'>If you are registered in EduShop then Login. We are the only one online marketplace working for the students goods.</p>
                <hr className=' border text-gray-800 border-secondary' />
            </div>
            <div className="bg-cyan-200 lg:w-3/4 mx-auto flex items-center justify-center text-center text-gray-800 rounded-lg shadow-lg shadow-secondary-focus">
                <form onSubmit={submitHandler} className="flex flex-col w-full max-w-lg p-12 shadow-lg shadow-secondary text-gray-800 ng-untouched ng-pristine ng-valid rounded-lg">
                    <FaUserCircle className='text-8xl mx-auto -mt-24 bg-cyan-200 rounded-full p-2' />
                    <h2 className='text-5xl text-center font-bold pb-5'>Login</h2>
                    <label className="self-start text-xs mt-2 font-semibold">YOur Email</label>
                    <input name='email' type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-secondary focus:ring-secondary" required />
                    <label className="self-start mt-3 text-xs font-semibold">Password</label>
                    <input name='password' type="password" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-emerald-600 focus:ring-secondary" required />
                    <button type="submit" className="flex w-full mt-6 items-center justify-center h-12 px-6 text-sm font-semibold rounded bg-secondary text-gray-800">Login</button>
                    <div className="flex justify-center mt-6 space-x-2 text-xs">
                        <p className="text-gray-600">New in EduShop? Please <Link to='/register'>Register</Link></p>
                    </div>
                    <h4 className='text-xl font-semibold mt-6'>Sign in with</h4>
                    <div className='-mb-16 flex justify-between'>
                        <FaGoogle className='text-5xl bg-cyan-200 rounded-full shadow-xl shadow-secondary-focus hover:animate-spin hover:text-secondary-focus hover:shadow-secondary' />
                        <FaFacebook className='text-5xl bg-cyan-200 rounded-full shadow-xl shadow-secondary-focus hover:animate-spin hover:bg-secondary-focus hover:shadow-secondary hover:text-cyan-200' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;