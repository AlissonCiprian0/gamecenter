import React from 'react';
import "./Games.css";

import PrimaryButton from '../PrimaryButton/PrimaryButton';

// Data
import products from '../../products.json';

// Icons
import {ReactComponent as InfoIcon} from "../../assets/svg/info.svg";

const Games = ({selectGame}) => {
    const gamesToShow = [products.Games[10], products.Games[1], products.Games[11]];

    // Handle game selection
    const handleGameSelection = (id) => {
        // window.history.go('http://localhost:3000/');
        async function changeHistory() {
            window.history.replaceState(null, null, "?id="+id)
        }
        changeHistory().then(selectGame());
    }

    return (
        <div className='Games'>
            <div className='Games-title'>
                <h1>Games</h1>
                <PrimaryButton classe='bordered'>VER MAIS</PrimaryButton>
                <div className='Games-title-divisor'><span /></div>
            </div>

            <div className='Games-products'>
                <div className='Games-products-col'>
                    <div className='Games-product Games-product-big' onClick={() => handleGameSelection(products.Games[9].id)}>
                        <img src={products.Games[9].imageBig} className='Games-product-big-background' />

                        <InfoIcon className='Games-product-infoIcon' />

                        <div className='Games-product-big-action-area'>
                            <img src={products.Games[9].logo} />
                            <PrimaryButton>CONFERIR</PrimaryButton>
                        </div>
                    </div>
                </div>

                <div className='Games-products-col'>
                    {
                        gamesToShow.map((game) => (
                            <div className='Games-product' key={game.id} onClick={() => handleGameSelection(game.id)}>
                                <InfoIcon className='Games-product-infoIcon' />

                                <div className='Games-product-logo'>
                                    <img src={game.logo} />
                                </div>
                                
                                <div className='Games-product-action-area'>
                                    <img src={game.imageSmall} className='Games-product-background' />
                                    <PrimaryButton>CONFERIR</PrimaryButton>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Games;