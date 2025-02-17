import React from 'react';
import { HiArrowCircleRight } from 'react-icons/hi'
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { img, name, detail, badge, price, _id } = product;
    return (
        <div className='relative rounded-lg bg-cyan-200 shadow-lg group-hover:cursor-pointer group-hover:scale-90 hover:!scale-100 ease-linear duration-500'>
            <img src={img} alt="productImg" className='h-60 p-4 w-44 absolute z-10 left-1/4 border border-cyan-200 shadow-lg' />
            <div className='w-full'>
                <Link to={`/product/${_id}`} className='btn btn-secondary rounded-none w-full font-semibold text-xl absolute bottom-0 z-30 shadow-lg'>DETAILS<HiArrowCircleRight className='ml-2' /></Link>
            </div>
            <div className='rounded-lg bg-white my-0 py-0 shadow-lg' style={{
                clipPath: 'polygon(0 calc(55% - 0%), 100% calc(100% - 75%), 100% 100%, 0 100%)'
            }}>
                <div className="card shadow-xl">
                    <figure></figure>
                    <div className="card-body pt-64">
                        <h2 className="card-title justify-center">
                            {name}
                            {
                                badge &&
                                <div className="badge badge-secondary">{badge}</div>
                            }
                        </h2>
                        <p>{detail}</p>
                        <div className="card-actions justify-center">
                            <h2 className='card-title pb-6'>
                                Price: ৳{price}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;