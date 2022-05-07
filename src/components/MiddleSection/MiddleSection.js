import React from 'react';

const MiddleSection = () => {
    return (
      <div className="flex lg:flex-row lg:px-20 py-20  sm: flex flex-col px-5 sm:mb-5">
        <div className="lg:w-2/4 sm:w-auto my-5">
          <h1 className="text-3xl mb-5">
            <strong className=" mb-3">NATURA SPICES</strong>
            <br />
            ECOLOGY PRODUCTS
          </h1>
          <p className=" lg:mb-5 sm:w-full ">
            <strong >
              Natura Spices is a export company that will provide you the best
              spice accross indonesia our product have the best quality from our
              supplier accros indonesia that directly collected from indonesia
              best farmer. We will always ensure you the best quality product.
            </strong>
          </p>
          <p>
            Our product is directly harvested from farmers accros indonesia. The
            process we take to ensure quality of the product by directly
            involved in the process of harvesting the product, drying process
            and the final process of packaging. We are involved in every stage
            of the spice farming process. As additional information most of our
            product are natural process, most of the farmers also still used
            traditional method on some of the spice processing such as drying
            the product on a direct sunlight, and the sortation of the spice are
            also directly handpicked by farmers so we can 100% ensure that our
            product is highly maintained both in quality and consistency. We
            serve some variant of spice in huge amount of quantity and stable
            supply, our Vanilla originated from East Nusa. We also serve Long
            Nutmeg and Mace Origin Fak Fak, Papua.
          </p>
        </div>
        <div className="flex justify-center lg:w-2/4 sm:my-5">
          <img
            src="https://naturaspices.co.id/wp-content/uploads/2019/02/img_5.png"
            alt="natural species"
          />
        </div>
      </div>
    );
};

export default MiddleSection;