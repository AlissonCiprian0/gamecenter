import React from 'react';
import "./Footer.css";

// Icons
import {ReactComponent as LogoIcon} from "../../assets/svg/logoWhite.svg";
import {ReactComponent as FacebookIcon} from "../../assets/svg/facebook.svg";
import {ReactComponent as TwitterIcon} from "../../assets/svg/twitter.svg";

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer-up'>
                <LogoIcon />
                <ul className='Footer-nav'>
                    <li>
                        <a href='#'>
                            Sobre nós
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            Como comprar
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            Segurança
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            Envio
                        </a>
                    </li>
                </ul>
                <div className='Footer-social'>
                    <FacebookIcon />
                    <TwitterIcon />
                </div>
            </div>

            <div className='Footer-down'>
                <span>© 2022 Alisson Cipriano. Todos os direitos reservados.</span>
            </div>
        </div>
    );
}
 
export default Footer;