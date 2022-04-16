import React from 'react';
import "./Home.css";

// Components
import Hero from '../../components/Hero/Hero';
import BannerInfo from '../../components/BannerInfo/BannerInfo';

const Home = () => {
    return (
        <div className='Home'>
            <Hero />
            <BannerInfo />
        </div>
    );
}
 
export default Home;