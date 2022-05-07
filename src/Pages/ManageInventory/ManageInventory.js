import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts/useProducts';
import ProductDetails from '../ProductDetails/ProductDetails';

const ManageInventory = () => {
     const [products, setProducts] = useProducts();


      const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
          const url = `http://localhost:5000/product/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((result) => {
              const remaining = products.filter(
                (item) => item._id !== id
              );
              setProducts(remaining);
            });
        }
      };
    return (
      <div>
        <div className="flex flex-wrap lg:flex-row justify-center px-10 sm:flex flex-col">
          {products.map((items) => (
            <div className="lg:w-1/4 flex justify-center flex-col border-solid border-2 mx-2 px-5 my-5 sm:w-full">
              <img src={items.img} width="200" height="150" />

              <span>
                <strong>Name :</strong>
                {items.name}
              </span>
              <p>
                <strong>Supplier Name :</strong>
                {items.suppliername}
              </p>
              <p>
                <strong>Quantity :</strong>
                {items.quantity}
              </p>
              <span>
                <strong>Price :</strong>
                {items.price}$
              </span>
              <button className="flex mb-3 bg-orange-600 text-white rounded-md px-2 py-2 w-1/2" onClick={() => handleDelete(items._id)}>
                Delete
              </button>
            </div>
          ))}
        </div>

        <Link to="/addinventory">
          <button className="flex justify-center mb-3 bg-orange-600 text-white rounded-md px-2 py-2 mx-auto">
            Add New Inventory
          </button>
        </Link>
      </div>
    );
};

export default ManageInventory;