import React from 'react';
import "./BannerInfo.css";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// SVGs
import {ReactComponent as Parcelamento} from "../../assets/svg/PARCELAMENTO.svg";
import {ReactComponent as Frete} from "../../assets/svg/FRETE_GRÁTIS.svg";
import {ReactComponent as Atendimento} from "../../assets/svg/ATENDIMENTO.svg";
import {ReactComponent as Vantagens} from "../../assets/svg/CLUBE_DE_VANTAGENS.svg";
import {ReactComponent as Seguro} from "../../assets/svg/SITE_SEGURO.svg";

const BannerInfo = () => {
    return (
        <div className='BannerInfo'>
            <Splide
                aria-label="My Favorite Images"
                options={ {
                    type: 'slide',
                    perPage: 5,
                    arrows: false,
                    pagination: false,
                    width: '100%',
                    gap: '1rem',
                    breakpoints: {
                        1024: {
                            perPage: 4,
                        },
                        768: {
                            perPage: 3,
                            type: 'loop',
                        },
                        600: {
                            perPage: 2,
                        },
                    }
                } }
            >
                <SplideSlide>
                    <Parcelamento />
                </SplideSlide>
                <SplideSlide>
                    <Frete />
                </SplideSlide>
                <SplideSlide>
                    <Atendimento />
                </SplideSlide>
                <SplideSlide>
                    <Vantagens />
                </SplideSlide>
                <SplideSlide>
                    <Seguro />
                </SplideSlide>
            </Splide>
        </div>
    );
}
 
export default BannerInfo;