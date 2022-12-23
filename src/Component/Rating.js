import React, { useState } from 'react';

const Rating = () => {
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate)

        // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (rate) => console.log(rate)

    return (
        <div className='App'>
            <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
            /* Available Props */
            />
        </div>
    );
};

export default Rating;