
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts/useProducts';
import ProductDetails from '../ProductDetails/ProductDetails';

const Products = () => {
    const [products , setProducts] = useProducts();


 
    return (
      <div className="flex justify-center flex-col items-center">
        <h2 className="text-center my-5 text-3xl">Stored Products</h2>
        <div className="flex flex-wrap lg:flex-row justify-center lg:px-10 sm:flex flex-col sm:px-5">
          {products.slice(0, 6).map((items) => (
            // <div className="w-1/4 flex justify-center flex-col items-center">
            //     <img src={items.img} width="200" height="150"/>
            //   <span>{items.name}</span>
            //   <span>{items.price}$</span>
            // </div>
            <ProductDetails key={items._id} product={items} />
          ))}
        </div>
        <Link to="/manageinventory">
          <button className="mx-5 bg-orange-600 text-white rounded-md px-2 py-2">
            Manage Inventory
          </button>
        </Link>
      </div>
    );
};

export default Products;