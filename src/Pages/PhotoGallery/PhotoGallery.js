import React from 'react';

const PhotoGallery = () => {
    return (
        <section className="w-5/6 mx-auto text-gray-900">
            <h2 className='text-4xl text-center font-bold pb-5'>Product Gallery</h2>
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <img src="https://i.ibb.co/1R6YHtM/nerd-Notebook.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square border border-cyan-200 shadow-md shadow-gray-200" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/ZzzyzNq/guide-5.jpg" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/YNb8jnH/guide-4.jpg" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/xmMvFMN/economics-Test.jpg" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/9cv9xPt/math-Sugession-10.png" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/5WsbTXv/note-Everything.jpg" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/n3d1MQw/workMap.jpg" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/kqcWc7n/perker.jpg" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/YQ9rfdS/wooden.jpg" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/HrgVr4M/Magnum-Ferfect-Pencil.png" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/5WsbTXv/note-Everything.jpg" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/yXFjScV/Mechanical.png" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/n3d1MQw/workMap.jpg" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/rQ11nBg/hbPencil.webp" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/M7640sy/classic-Fountain.jpg" />
                <img src="https://i.ibb.co/GvqZNVx/natural.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-50 aspect-square border border-cyan-200 shadow-md shadow-gray-200" />
            </div>
        </section>
    );
};

export default PhotoGallery;