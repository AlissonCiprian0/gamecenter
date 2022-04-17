import React from 'react';
import "./FeaturedGame.css";

import PrimaryButton from '../PrimaryButton/PrimaryButton';

// SVGs
import {ReactComponent as Star} from "../../assets/svg/star.svg";

const FeaturedGame = () => {
    return (
        <div className='FeaturedGame'>
            <div className='FeaturedGame-content'>
                <div className='FeaturedGame-text'>
                    <span className='FeaturedGame-title'>The Witcher III Wild Hunt</span>

                    <span className='FeaturedGame-description'>
                        Em The Witcher 3, Ciri é perseguida por uma ordem chamada Wild
                        Hunt (Caçada Selvagem, em português), que dá título ao game.
                        Wild Hunt é um grupo de espectros poderoso...
                    </span>
                </div>

                <div className='FeaturedGame-info'>
                    <div className='FeaturedGame-score'>
                        <span>250</span>
                        <span>score</span>
                    </div>

                    <span className='FeaturedGame-price'>R$<i>119,50</i></span>
                </div>

                <PrimaryButton classe='FeaturedGame-button'>CONFERIR</PrimaryButton>
            </div>

            <div className='FeaturedGame-background'>
                <div className='FeaturedGame-review'>
                    <div className='FeaturedGame-review-info'>
                        <span><i>Gênero:</i> RPG de Ação</span>
                        <span><i>Lançamento:</i> 2015</span>
                    </div>

                    <div className='FeaturedGame-review-stars'>
                        <Star className='full' />
                        <Star className='full' />
                        <Star className='full' />
                        <Star className='full' />
                        <Star />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default FeaturedGame;