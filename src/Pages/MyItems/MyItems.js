import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    const [items , setItems] = useState([]);
    const navigate = useNavigate()
    
    const [user] = useAuthState(auth);




   
    // useEffect(() => {
    //    const getItem = async () => {
    //      const email = user.email;
    //      const url = `http://localhost:5000/myitem?email=${email}`;
    //      try{
    //          const { data } = await axios.get(url, {
    //            headers: {
    //              authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
    //            },
    //          });
    //          setItems(data);

    //      }
    //      catch(error){
    //        console.log(error.message);
    //        if(error.response.status === 401 || error.response.status === 403){
    //          signOut(auth);
    //          navigate("/login")

    //        }
           
    //      }
       
    //    };
    //    getItem();

    // } , [user])



    useEffect(() => {
      const getItem = async () => {
        const email = user.email;
        console.log(email);
        const url = `http://localhost:5000/myitem?email=${email}`;
       
          const { data } = await axios.get(url,{
             headers: {
                authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
               },
          } );
          setItems(data);

      };
      getItem();
    }, [user]);

   

    console.log(items)
  

     const handleDelete = (id) => {
       const proceed = window.confirm("Are you sure you want to delete?");
       if (proceed) {
         const url = `http://localhost:5000/product/${id}`;
         fetch(url, {
           method: "DELETE",
         })
           .then((res) => res.json())
           .then((result) => {
             const remaining = items.filter((item) => item._id !== id);
             setItems(remaining);
           });
       }
     };

    
    return (
      <div>
       
        <div className="flex justify-evenly my-20 w-full">
          {items.map((item) => (
            <div className="lg:w-1/4 flex justify-center shadow-xl px-3 py-3 flex-col sm:w-full">
              <img src={item.img} />
              <span>Name : {item.name}</span>
              <p>
                <strong>Quantiy :</strong>
                {item.quantity}kg
              </p>
              <p>
                <strong>Description : </strong>
                {item.description}
              </p>
              <span>
                <strong>Price :</strong>
                {item.price}$
              </span>
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
};

export default MyItems;