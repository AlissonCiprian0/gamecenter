import React, { useContext, useEffect, useState } from 'react';
import "./Home.css";

// Cart context
import CartContext from '../../Context';

// Components
import Hero from '../../components/Hero/Hero';
import BannerInfo from '../../components/BannerInfo/BannerInfo';
import Games from '../../components/Games/Games';
import FeaturedGame from '../../components/FeaturedGame/FeaturedGame';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import GameInfo from '../../components/GameInfo/GameInfo';
import Cart from '../../components/Cart/Cart';

const Home = () => {
    const [showProductWindow, setShowProductWindow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { showCart } = useContext(CartContext);

    // Handle GameInfo component display
    const handleProductSelection = {
        select() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            setSelectedProduct(urlParams.get('id'));
        },
        diselect() {
            window.history.replaceState(null, null, window.location.pathname);
            setSelectedProduct(null);
            setShowProductWindow(false);
        }
    }

    useEffect(() => {
        handleProductSelection.select();
    }, []);

    useEffect(() => {
        if (selectedProduct)
            setShowProductWindow(true);
    }, [selectedProduct]);

    return (
        <div className='Home'>
            <Hero />

            {
                showCart &&
                <Cart />
            }

            <BannerInfo />
            <Games selectGame={handleProductSelection.select} />
            <FeaturedGame />
            <Contact />
            <Footer />

            { 
                showProductWindow &&
                <GameInfo
                    hide={() => handleProductSelection.diselect()}
                    gameID={selectedProduct}
                />
            }
        </div>
    );
}
 
export default Home;