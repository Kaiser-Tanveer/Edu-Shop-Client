import React from 'react';
import { useNavigation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const MyProducts = () => {
    const navigation = useNavigation();

    if (navigation.state === 'loading') {
        return <Spinner />
    }
    return (
        <div>
            MyProducts..
        </div>
    );
};

export default MyProducts;