import React from 'react';
import "./Hero.css";

import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Hero = () => {
    return (
        <div className='Hero'>
            <div className='Hero-text'>
                <span>RTX3090 XTREME</span>
                <h1>
                    SUA GAMEPLAY<br/>
                    SERÁ DE ALTO NÍVEL!
                </h1>

                <PrimaryButton classudo='lala'>CONFERIR</PrimaryButton>
            </div>
        </div>
    );
}
 
export default Hero;