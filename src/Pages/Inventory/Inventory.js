import React, { useEffect, useRef, useState } from 'react';
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
      const amountref = useRef();

       const handlerestock = (e,id) => {

          e.preventDefault();
          const number = parseInt(amountref.current.value);

          
          setQuantity(quantity + number);

          const increasedquantity = { quantity };

           const url = `http://localhost:5000/increase/${id}`;
           fetch(url, {
             method: "PUT",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(increasedquantity),
           })
             .then((res) => res.json())
             .then((data) => {
               console.log("succes", data);
               alert("Quantity updated succesfully");
             });
    



   
       }

   
    return (
      <div>
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
            <button onClick={() => reduceQuantity(product._id)}>
              Delivered
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2>Restock Items</h2>
          <form className="flex flex-col w-1/2 px-5 py-10 mx-5 my-5  border-solid border-2" onSubmit={(e) => handlerestock(e,id)}>
            <label>Enter number of amount that you want Restock </label>
            <input type="number" className="border-solid border-2 my-5" ref={amountref} />
            <button className="flex mb-3 bg-orange-600 text-white rounded-md px-2 py-2 w-1/4" type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
};

export default Inventory;