
import React, { useEffect, useState } from 'react';
import useProducts from '../../Hooks/useProducts/useProducts';
import ProductDetails from '../ProductDetails/ProductDetails';

const Products = () => {
    const [products , setProducts] = useProducts();


 
    return (
      <div>
        <h2 className="text-center my-5 text-3xl">Stored Products</h2>
        <div className="flex flex-wrap justify-center px-10">
          {products.slice(0,6).map((items) => (
            // <div className="w-1/4 flex justify-center flex-col items-center">
            //     <img src={items.img} width="200" height="150"/>
            //   <span>{items.name}</span>
            //   <span>{items.price}$</span>
            // </div>
            <ProductDetails product={items} />
          ))}
        </div>
      </div>
    );
};

export default Products;