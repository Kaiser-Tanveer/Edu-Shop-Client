import React, { useContext, useState } from 'react';
import logo from '../../Assets/Logos/eduShopLogo.png';
import { Link } from 'react-router-dom';
import useTitle from '../../Component/CustomHooks/useTitle';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { userRegister } = useContext(AuthContext);
    const [disable, setDisable] = useState(false);
    useTitle('Sign Up');

    const submitHandler = data => {
        console.log(data);
        userRegister(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .the(err => console.error(err))
    }

    const termsHandler = (e) => {
        const check = e.target.checked;
        setDisable(check);
    }
    return (
        <div className='lg:w-5/6 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            <div className='w-3/4 mx-auto py-20'>
                <h2 className="text-5xl text-secondary text-center font-bold">Register</h2>
                <p className='py-6 text-center text-xl text-gray-600'>to get amazing features from EduShop. We are the only one online marketplace working for the students goods.</p>
                <hr className=' border text-gray-800 border-secondary' />
            </div>
            <div className="bg-cyan-200 lg:w-3/4 mx-auto flex items-center justify-center text-center text-gray-800 rounded-lg shadow-lg shadow-secondary-focus">
                <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col w-full max-w-lg p-12 shadow-lg shadow-secondary text-gray-800 ng-untouched ng-pristine ng-valid rounded-lg">
                    <img src={logo} alt="" className='w-1/2 mx-auto bg-cyan-200 rounded-full -mt-24 border-t-2 border-b-0' />
                    <label className="self-start text-xs font-semibold">Your Name</label>
                    <input
                        {...register("name", { required: "Name is required." })}
                        type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-secondary focus:ring-secondary" required />
                    {errors.name && <p className='text-error'>{errors.name.message}</p>}
                    <label className="self-start text-xs mt-2 font-semibold">Your Email</label>
                    <input
                        {...register("email", { required: "Email is required." })}
                        type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-secondary focus:ring-secondary" required />
                    {errors.email && <p className='text-error'>{errors.email.message}</p>}
                    <label className="self-start mt-3 text-xs font-semibold">Password</label>
                    <input
                        {...register("password", { required: "Password is required.", pattern: { value: '/(?=.*[a-z])(?=.*[A-Z])/', message: 'Password must contain uppercase and lowercase' } })}
                        type="password" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-emerald-600 focus:ring-secondary" required />
                    {errors.password && <p className='text-error'>{errors.password.message}</p>}
                    <div className='mt-6'>
                        <div className='flex items-center py-2'>
                            <input onClick={termsHandler} type="checkbox" className='mr-2' />
                            <span className='text-gray-600 text-xs'>Accept <Link className='link-hover'>terms and conditions</Link></span>
                        </div>
                        <button type="submit" className={
                            !disable ?
                                "flex w-full items-center justify-center h-12 px-6 text-sm font-semibold rounded text-gray-800 btn-disabled"
                                :
                                "flex w-full items-center justify-center h-12 px-6 text-sm font-semibold rounded bg-secondary text-gray-800"
                        } >Register</button>
                    </div>
                    <div className="flex justify-center mt-6 space-x-2 text-xs">
                        <p className="text-gray-600">Already have an account? Please <Link className='link-hover' to='/logIn'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;