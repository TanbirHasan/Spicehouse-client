
import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products , setProducts] = useState([]);


    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
      <div>
        <h2 className="text-center my-5 text-3xl">Stored Products</h2>
        <div className="flex flex-wrap justify-center">
          {products.map((items) => (
            <div className="w-1/4 flex justify-center flex-col items-center">
                <img src={items.img} width="200" height="150"/>
              <span>{items.name}</span>
              <span>{items.price}$</span>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Products;