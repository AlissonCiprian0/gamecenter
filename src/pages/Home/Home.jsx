import React from 'react';
import "./Home.css";

// Components
import Hero from '../../components/Hero/Hero';
import BannerInfo from '../../components/BannerInfo/BannerInfo';
import Games from '../../components/Games/Games';

const Home = () => {
    return (
        <div className='Home'>
            <Hero />
            <BannerInfo />
            <Games />
        </div>
    );
}
 
export default Home;