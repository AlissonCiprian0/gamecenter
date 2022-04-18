import React, { useContext } from 'react';
import "./Cart.css";

// Cart context
import CartContext from '../../Context';

// Icons
import {ReactComponent as TrashIcon} from "../../assets/svg/trash.svg";

const Cart = () => {
    const { cart, setCart, setShowCart } = useContext(CartContext);

    const handleProductDelete = (id, qtd) => {
        let newList = cart.list.filter(e => e.id != id);

        setCart(prevCart => ({
            ...prevCart,
            list: newList,
            quantity: cart.quantity - qtd
        }));
    }

    return (
        <div className='Cart'>
            <div className='Cart-bg' onClick={() => {setShowCart(false)}}></div>
            <div className='Cart-container'>
                <span className='Cart-header'>Meu carrinho</span>

                {
                    cart.quantity === 0
                    ?<span className='Cart-empty'>Carrinho vazio</span>
                    :
                    <ul className='Cart-items'>
                        {
                            cart.list.map((cartItem) => (
                                <li className='Cart-item'>
                                    <div className='Cart-item-image'>
                                        <img src={cartItem.cartImage} />
                                    </div>

                                    <div className='Cart-item-content'>
                                        <button className='Cart-item-delete' onClick={() => handleProductDelete(cartItem.id, cartItem.quantity)}>
                                            <TrashIcon />
                                        </button>
                                        <span className='Cart-item-name'>{cartItem.name}</span>
                                        <span className='Cart-item-quantity'>Quantidade: {cartItem.quantity}</span>
                                        <span className='Cart-item-price'>R$ {cartItem.price}</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                }
            </div>
        </div>
    );
}
 
export default Cart;