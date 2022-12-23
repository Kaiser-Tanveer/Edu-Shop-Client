import React, { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - EduShop`
    }, [title])
};

export default useTitle;