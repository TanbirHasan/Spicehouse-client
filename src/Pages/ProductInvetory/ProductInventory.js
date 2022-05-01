import React from 'react';
import { useParams } from 'react-router-dom';

const ProductInventory = () => {
    const {id} = useParams();
    return (
        <div>
            <h3>This is product inventory : </h3>
            <h3>Product is : {id}</h3>
            
        </div>
    );
};

export default ProductInventory;