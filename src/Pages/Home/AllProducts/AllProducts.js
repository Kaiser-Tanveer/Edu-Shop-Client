import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllProducts = () => {
    const categories = useLoaderData([]);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {
                categories.map(category =>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={category.img} alt="Shoes" className='h-60 w-full p-7 rounded' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {category.category_name}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{category.detail}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AllProducts;