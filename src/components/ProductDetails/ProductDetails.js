import React from 'react';

const ProductDetails = ({product}) => {
    const {name,img,price,quantity,description} = product;
    return (
      <div className="w-1/4 flex justify-center flex-col items-center px-5 text-center border-solid border-2 mx-5 my-3">
        <img src={img} width="200" height="150" />

        <span>
          <strong>Name : </strong>
          {name}
        </span>
        <p>
          <strong>Description : </strong>
          {description}
        </p>
        <p><strong>Quantity : </strong>{quantity}</p>
        <span>
          <strong>Price : </strong>
          {price}$
        </span>
        <button className=' mb-3 bg-orange-600 text-white rounded-md px-2 py-2'>Manage Inventory</button>
      </div>
    );
};

export default ProductDetails;