import React from 'react';
import useProducts from '../../Hooks/useProducts/useProducts';
import ProductDetails from '../ProductDetails/ProductDetails';

const ManageInventory = () => {
     const [products, setProducts] = useProducts();
    return (
      <div>
        <div className="flex flex-wrap justify-center px-10">
          {products.map((items) => (
            <div className="w-1/4 flex justify-center flex-col border-solid border-2 mx-2 px-5 my-5">
                <img src={items.img} width="200" height="150"/>
               
              <span><strong>Name :</strong>{items.name}</span>
              <p><strong>Supplier Name :</strong>{items.suppliername}</p>
              <p><strong>Quantity :</strong>{items.quantity}</p>
              <span><strong>Price :</strong>{items.price}$</span>
            </div>
            
          ))}
        </div>
      </div>
    );
};

export default ManageInventory;