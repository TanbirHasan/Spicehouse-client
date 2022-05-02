import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProductdetails from '../../Hooks/useProductdetails/useProductdetails';

const Inventory = () => {
       const { id } = useParams();
       const [product] = useProductdetails(id);


   
    return (
      <div className='w-1/2 mx-auto my-5 px-5 py-5 border-solid border-2'>
        <h1 className='text-2xl '>Product Information</h1>
        <div >
            <img src={product.img}  alt="item"/>
          <h3><strong>Name : </strong>: {product.name}</h3>
          <p><strong>Description :</strong>{product.description}</p>
          <p><strong>Quantity :</strong>{product.quantity}</p>
          <p><strong>Price : </strong>{product.price}</p>
          <button></button>
          
        </div>
      </div>
    );
};

export default Inventory;