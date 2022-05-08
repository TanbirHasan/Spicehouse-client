import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductdetails from '../../Hooks/useProductdetails/useProductdetails';

const Inventory = () => {
       const { id } = useParams();
       const [product] = useProductdetails(id);
       const quantitynumber = product.quantity;
       console.log(quantitynumber)
     
         const [quantity, setQuantity] = useState();


       useEffect(() => {
         setQuantity(quantitynumber);

       }, [quantitynumber])

     
    
      
 

       const reduceQuantity = (id) => {

       setQuantity(quantity - 1)

      

        const updatedquantity = {quantity};

        console.log(updatedquantity);


        const url = `http://localhost:5000/reduce/${id}`;
        fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedquantity),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("succes", data);
            alert("Quantity updated succesfully");
          });

      
       


       };


   
    return (
      <div className="lg:w-1/2 lg:mx-auto my-5 px-5 py-5 border-solid border-2 sm:mx-5">
        <h1 className="text-2xl ">Product Information</h1>
        <div>
          <img src={product.img} alt="item" />
          <h3>
            <strong>Name : </strong>: {product.name}
          </h3>
          <p>
            <strong>Description :</strong>
            {product.description}
          </p>
          <p>
            <strong>Quantity :</strong>
            {quantity}
          </p>
          <p>
            <strong>Supplier name :</strong>
            {product.suppliername}
          </p>
          <p>
            <strong>Price : </strong>
            {product.price}
          </p>
          <button onClick={() => reduceQuantity(product._id)}>Delivered</button>
        </div>
      </div>
    );
};

export default Inventory;