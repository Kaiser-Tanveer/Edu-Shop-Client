import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaGoogle, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import { toast } from 'react-hot-toast';
import { Zoom } from 'react-reveal';
import { ColorRing } from 'react-loader-spinner';

const LogIn = () => {
    const navigate = useNavigate();
    const { logIn, GLogIn, FLogIn } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const submitHandler = data => {
        setLoading(true);
        logIn(data.email, data.password)
            .then(result => {
                setLoading(false);
                toast.success('Logged in successfully!')
                navigate('/')
            })
            .catch(err => console.error(err))
    }

    const GLogInHandler = () => {
        GLogIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Logged in with Google successfully!');
                navigate('/');
            })
            .catch(err => console.error(err))
    }

    const FLogInHandler = () => {
        FLogIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Logged in with Facebook successfully!');
                navigate('/');
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='lg:w-5/6 my-20 lg:my-32 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            <Zoom>
                <div className='w-3/4 mx-auto py-20'>
                    <h2 className="text-5xl text-secondary text-center font-bold">Welcome!!</h2>
                    <p className='py-6 text-center text-xl text-gray-600'>If you are registered in EduShop then Login. We are the only one online marketplace working for the students goods.</p>
                    <hr className=' border text-gray-800 border-secondary' />
                </div>
            </Zoom>
            <div className="bg-cyan-200 lg:w-3/4 mx-auto flex items-center justify-center text-center text-gray-800 rounded-lg shadow-lg shadow-secondary-focus">
                <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col w-full max-w-lg p-12 shadow-lg shadow-secondary text-gray-800 ng-untouched ng-pristine ng-valid rounded-lg">
                    <FaUserCircle className='text-8xl mx-auto -mt-24 bg-cyan-200 rounded-full p-2' />
                    <h2 className='text-5xl text-center font-bold pb-5'>Login</h2>
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
                    <button type="submit" className="flex w-full mt-6 items-center justify-center h-12 px-6 text-sm font-semibold rounded bg-secondary text-gray-800">{
                        loading ?
                        <ColorRing
                            visible={true}
                            height="45"
                            width="45"
                            ariaLabel="color-ring-loading"
                            wrapperStyle={{}}
                            wrapperClass="color-ring-wrapper"
                            colors={['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']}/>
                        :
                        "Login"
                        }</button>
                    <div className="flex justify-center mt-6 space-x-2 text-xs">
                        <p className="text-gray-600">New in EduShop? <Link to='/register' className='link-hover link-error'>Register</Link></p>
                    </div>
                    <h4 className='text-xl font-semibold mt-6'>Sign in with</h4>
                    <div className='-mb-16 flex justify-between'>
                        <Zoom left>
                            <FaGoogle onClick={GLogInHandler} className='text-5xl bg-cyan-200 rounded-full shadow-xl shadow-secondary-focus hover:animate-spin hover:text-secondary-focus hover:shadow-secondary' />
                        </Zoom>
                        <Zoom right>
                            <FaFacebook onClick={FLogInHandler} className='text-5xl bg-cyan-200 rounded-full shadow-xl shadow-secondary-focus hover:animate-spin hover:bg-secondary-focus hover:shadow-secondary hover:text-cyan-200' />
                        </Zoom>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;