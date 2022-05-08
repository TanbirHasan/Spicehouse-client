import React from 'react';
import Banner from '../../components/Banner/Banner';
import Imggallery from '../../components/Imggallery/Imggallery';
import Loading from '../../components/Loading/Loading';
import MiddleSection from '../../components/MiddleSection/MiddleSection';
import PremiumProducts from '../../components/PremiumProducts/PremiumProducts';
import Products from '../Products/Products'


const Home = () => {
    return (
      <div>
       
        <Banner />
        <MiddleSection />
        <Products/>
        <PremiumProducts/>
       

        
        <Imggallery />

      </div>
    );
};

export default Home;