import React from 'react';
import "./Hero.css";

// SVGs
import {ReactComponent as ButtonArrows} from "../../assets/svg/button_arrows.svg";

const Hero = () => {
    return (
        <div className='Hero'>
            <div className='Hero-text'>
                <span>RTX3090 XTREME</span>
                <h1>
                    SUA GAMEPLAY<br/>
                    SERÁ DE ALTO NÍVEL!
                </h1>

                <button>
                    <span>CONFERIR</span>
                    <ButtonArrows />
                </button>
            </div>
        </div>
    );
}
 
export default Hero;