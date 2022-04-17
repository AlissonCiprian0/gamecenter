import React from 'react';
import "./Games.css";

import PrimaryButton from '../PrimaryButton/PrimaryButton';

// Games images
import Lol_image from "../../assets/games/lol-big.png";
import Lol_logo from "../../assets/png/lol-logo.png";
import CS_image from "../../assets/games/cs-small.png";
import CS_logo from "../../assets/png/cs-logo.png";
import COD_image from "../../assets/games/cod-small.png";
import COD_logo from "../../assets/png/cod-logo.png";
import ER_image from "../../assets/games/er-small.png";
import ER_logo from "../../assets/png/er-logo.png";

const Games = () => {
    return (
        <div className='Games'>
            <div className='Games-title'>
                <h1>Games</h1>
                <PrimaryButton classe='bordered'>VER MAIS</PrimaryButton>
                <div className='Games-title-divisor'><span /></div>
            </div>

            <div className='Games-products'>
                <div className='Games-products-col'>
                    <div className='Games-product Games-product-big'>
                        <img src={Lol_image} className='Games-product-big-background' />

                        <div className='Games-product-big-action-area'>
                            <img src={Lol_logo} />
                            <PrimaryButton>CONFERIR</PrimaryButton>
                        </div>
                    </div>
                </div>

                <div className='Games-products-col'>
                    <div className='Games-product'>
                        <div className='Games-product-logo'>
                            <img src={CS_logo} className='remove-bg' />
                        </div>
                        
                        <div className='Games-product-action-area'>
                            <img src={CS_image} className='Games-product-background' />
                            <PrimaryButton>CONFERIR</PrimaryButton>
                        </div>
                    </div>

                    <div className='Games-product'>
                        <div className='Games-product-logo'>
                            <img src={COD_logo} />
                        </div>

                        <div className='Games-product-action-area'>
                            <img src={COD_image} className='Games-product-background' />
                            <PrimaryButton>CONFERIR</PrimaryButton>
                        </div>
                    </div>

                    <div className='Games-product'>
                        <div className='Games-product-logo'>
                            <img src={ER_logo} className='remove-bg' />
                        </div>

                        <div className='Games-product-action-area'>
                            <img src={ER_image} className='Games-product-background' />
                            <PrimaryButton>CONFERIR</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Games;