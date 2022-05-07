import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [items , setItems] = useState([]);
    const [user] = useAuthState(auth);


   

    const getItem = async() => {
        const email = user.email;
         const url = `http://localhost:5000/myitem?email=${email}`;
         const {data} = await axios.get(url);
         setItems(data);

    }
    getItem();

    
    return (
      <div>
       
        <div className='flex justify-evenly my-20'>
          {items.map((item) => (
            <div className="lg:w-1/4 flex justify-center flex-col items-center sm:w-full">
              <img src={item.img} width="200" height="150" />
              <span>Name : {item.name}</span>
              <p><strong>Quantiy :</strong>{item.quantity}kg</p>
              <span><strong>Price :</strong>{item.price}$</span>
            </div>
          ))}
        </div>
      </div>
    );
};

export default MyItems;