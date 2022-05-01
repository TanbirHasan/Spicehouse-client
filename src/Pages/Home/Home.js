import React from 'react';
import Banner from '../../components/Banner/Banner';
import Imggallery from '../../components/Imggallery/Imggallery';
import MiddleSection from '../../components/MiddleSection/MiddleSection';
import Products from '../Products/Products'


const Home = () => {
    return (
      <div>
       
        <Banner />
        <MiddleSection />
        <Products/>
        
        <Imggallery />

      </div>
    );
};

export default Home;