import React from 'react';
import { useForm } from 'react-hook-form';

const AddInventory = () => {

     const { register, handleSubmit } = useForm();
     const onSubmit = (data) => {
       console.log(data);
       const url = "http://localhost:5000/newproduct";
       fetch(url, {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(data),
       })
         .then((res) => res.json())
         .then((result) => console.log(data));
     };
    return (
      <div className="mx-10 my-10">
        <h2 className="text-3xl my-3 text-center">Add New Products</h2>
        {/* <form className="flex justify-center flex-col items-center">
          <input
            type="text"
            placeholder="Image"
            className="border-solid border-2 px-3 py-2 w-2/4 block my-3"
          />

          <input
            type="text"
            placeholder="Product Name"
            className="border-solid border-2 px-3 py-2 w-2/4 block my-3"
          />

          <input
            type="text"
            placeholder="Product Price"
            className="border-solid border-2 px-3 py-2 w-2/4 block my-3"
          />
          <button className="flex justify-center mb-3 bg-orange-600 text-white rounded-md px-2 py-2 mx-auto w-1/4">
            Submit
          </button>
        </form> */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center"
        >
          <input
            type="text"
            className="border-solid border-2 px-3 py-2 w-2/4 block my-3"
            {...register("photurl")}
            placeholder="Product Photo Url"
          />
        
          <input
            placeholder="Enter Products Name"
            className="border-solid border-2 px-3 py-2 w-2/4 block my-3"
            {...register("name", { required: true, maxLength: 20 })}
          />
          <input
            placeholder="Enter Products Quantity"
            className="border-solid border-2 px-3 py-2 w-2/4 block my-3"
            {...register("quantity", { required: true, maxLength: 20 })}
          />
          <input
            placeholder="Enter Supplier Name"
            className="border-solid border-2 px-3 py-2 w-2/4 block my-3"
            {...register("suppliername", { required: true, maxLength: 20 })}
          />
          <textarea
            placeholder="Enter Prducts description"
            className="border-solid border-2 px-3 py-2 w-2/4 block my-3"
            {...register("description", { required: true, maxLength: 20 })}
          />

          <input
            type="number"
            className="border-solid border-2 px-3 py-2 w-2/4 block my-3"
            {...register("price")}
            placeholder="Enter Products price"
          />

          <input
            type="submit"
            className="flex justify-center mb-3 bg-orange-600 text-white rounded-md px-2 py-2 mx-auto w-1/4"
          />
        </form>
      </div>
    );
};

export default AddInventory;