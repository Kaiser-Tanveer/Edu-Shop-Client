import React from 'react';
import { FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn, FaUserAlt } from 'react-icons/fa';

const MeetTeam = () => {
    const aboutData = [
        {
            img: "https://i.ibb.co/6tRd5D7/My-PP.jpg",
            name: "Kaiser Tanveer",
            profession: "Developer"
        },
        {
            img: "https://i.ibb.co/6tRd5D7/My-PP.jpg",
            name: "Kaiser Tanveer",
            profession: "Designer"
        },
        {
            name: "Mr. X",
            profession: "Content Creator"
        },
    ]
    return (
        <section className="py-6 bg-gray-100 text-gray-800">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Development team</p>
                <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">About Us</h1>
                <div className="flex flex-row flex-wrap-reverse justify-center mt-8 group">
                    {
                        aboutData.map(data =>
                            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-cyan-200 text-gray-100 shadow-lg shadow-gray-400 group-hover:cursor-pointer group-hover:scale-90 hover:!scale-100 ease-linear duration-500">
                                {
                                    data.img ?
                                        <img src={data.img} alt='' className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full border border-cyan-200 hover:shadow-lg shadow-gray-500-focus hover:scale-125 duration-500 ease-in-out" />
                                        :
                                        <FaUserAlt className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500 p-2 border border-primary shadow-md shadow-gray-500-focus" />
                                }
                                <div className="flex-1 my-4">
                                    <p className="text-xl font-semibold text-gray-700 leading-snug">{data.name}</p>
                                    <p className='text-gray-500'>{data.profession}</p>
                                </div>
                                <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                    <FaEnvelope className='text-xl text-gray-700 hover:text-secondary hover:scale-125' />
                                    <FaFacebookF className='text-xl text-gray-700 hover:text-secondary hover:scale-125' />
                                    <FaLinkedinIn className='text-xl text-gray-700 hover:text-secondary hover:scale-125' />
                                    <FaGithub className='text-xl text-gray-700 hover:text-secondary hover:scale-125' />
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default MeetTeam;