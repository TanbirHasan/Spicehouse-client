import React from 'react';

import './Banner.css'

const Banner = () => {
    return (
      <div>
        <div className="banner-image relative ...">
          <div className="banner-text absolute top-1/2 left-0 pl-5 animate-bounce">
            <h2 className="text-6xl">Organic Spice store</h2>
            <p className="text-2xl">
              Here you can get all spice which are chemical free
            </p>
          </div>
        </div>
      </div>
    );
};

export default Banner;