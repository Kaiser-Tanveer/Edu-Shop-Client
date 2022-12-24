import React from 'react';
import { Link } from 'react-router-dom';

const ProductMenu = ({ category }) => {
    const { img, category_name } = category;
    return (
        <Link to={`/products/${category_name}`}>
            <div className="hover:bg-secondary bg-cyan-200 shadow-xl flex flex-col lg:flex-row justify-center items-center pt-5 lg:pt-0 lg:px-5 rounded-md">
                <img src={img} alt="Shoes" className='w-20 h-20 rounded p-2' />
                <div className="px-2">
                    <h2 className="font-bold lg:text-xl">
                        {category_name}
                    </h2>
                </div>
            </div>
        </Link>
    );
};

export default ProductMenu;