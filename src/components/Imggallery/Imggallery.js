import React from 'react';
import spiceone from "../../Image/spice-1.jpg"
import spicetwo from "../../Image/spice-2.jpg"
import spicethree from "../../Image/spice-3.jpg"
import spicefour from "../../Image/spice-4.jpg"
import spicefive from "../../Image/spice-5.jpg"
import spicesix from "../../Image/spice-6.jpg"

const Imggallery = () => {
    return (
      <div className='my-10'>
          <h1 className='text-3xl text-center my-6 '>We have a Huge Collection</h1>
        <div className="flex flex-wrap justify-center">
          <img
            src={spiceone}
            className="mx-2 my-2"
            alt="spice"
            width="400"
            height="400"
          />
          <img
            src={spicetwo}
            className="mx-2 my-2"
            alt="spice"
            width="400"
            height="400"
          />
          <img
            src={spicethree}
            className="mx-2 my-2"
            alt="spice"
            width="400"
            height="400"
          />
          <img
            src={spicefour}
            className="mx-2 my-2"
            alt="spice"
            width="400"
            height="400"
          />
          <img
            src={spicefive}
            className="mx-2 my-2"
            alt="spice"
            width="400"
            height="400"
          />
          <img
            src={spicesix}
            className="mx-2 my-2"
            alt="spice"
            width="400"
            height="400"
          />
        </div>
      </div>
    );
};

export default Imggallery;