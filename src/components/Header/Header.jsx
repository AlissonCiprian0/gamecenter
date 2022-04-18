import React, { useContext } from 'react';
import "./Header.css";

// Cart context
import CartContext from '../../Context';

// Icons
import {ReactComponent as LogoIcon} from "../../assets/svg/logoWhite.svg";
import {ReactComponent as AccountIcon} from "../../assets/svg/account.svg";
import {ReactComponent as CartIcon} from "../../assets/svg/cart.svg";
import {ReactComponent as HeaderArrowIcon} from "../../assets/svg/headerArrow.svg";

// Data
import categories from '../../categories.json';

const Header = ({mini}) => {
    const { cart, setShowCart } = useContext(CartContext);

    return (
        <div className={`Header ${mini ? 'mini' : ''}`}>
            <div className='Header-container'>
                <div className='Header-action'>
                    <a href='#' className='Header-logo'>
                        <LogoIcon />
                    </a>

                    <div className='Header-action-container'>
                        <button className='Header-account'>
                            <AccountIcon />
                            <span>Minha Conta</span>
                        </button>
                        
                        <button className='Header-cart' onClick={() => {setShowCart(true)}}>
                            <CartIcon />

                            <span>{cart.quantity}</span>
                        </button>
                    </div>
                </div>
                <div className='Header-nav'>
                    <ul>
                        {
                            categories.map((category => (
                                <li className='Header-nav-iten' key={category.id}>
                                    <a className='Header-nav-iten-link' href='#'>
                                        {category.title}

                                        <HeaderArrowIcon />
                                    </a>
                                </li>
                            )))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Header;