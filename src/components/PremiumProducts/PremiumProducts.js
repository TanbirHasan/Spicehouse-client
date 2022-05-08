import React from 'react';

const PremiumProducts = () => {
    return (
      <div className="my-20">
        <h3 className="text-3xl text-center">Premium Quality Products</h3>
        <div className="flex justify-evenly lg:flex-row lg:px-20 my-10 sm:flex flex-col px-5">
          <div className="mx-1">
            <img src="https://i.ibb.co/KrRNq6q/pre1.webp" alt="" />
            <h4 className="text-2xl my-3">Spicy Masalas</h4>
            <p></p>
          </div>
          <div className="mx-1">
            <img src="https://i.ibb.co/6WtPsZ0/pre2.webp" alt="" />
            <h4 className="text-2xl my-3">Herbs Masalas</h4>
            <p></p>
          </div>
          <div className="mx-1">
            <img src="https://i.ibb.co/6WMQnxz/pre3.webp" alt="" />
            <h4 className="text-2xl my-3">Mustard Seeds</h4>
            <p></p>
          </div>
          <div className="mx-1">
            <img src="https://i.ibb.co/YhcGTVF/pre4.webp" alt="" />
            <h4 className="text-2xl my-3">Garam Masalas</h4>
            <p></p>
          </div>
        </div>
      </div>
    );
};

export default PremiumProducts;