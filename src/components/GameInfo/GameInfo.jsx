import React, { useContext, useEffect, useState } from 'react';
import "./GameInfo.css";

// Cart context
import CartContext from '../../Context';

// Data
import products from '../../products.json';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const GameInfo = ({hide, gameID = null}) => {
    const [gameData, setGameData] = useState(null);
    const [gameQuantity, setGameQuanttity] = useState(1);
    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {
        products.Games.map((game) => {
            if (game.id == gameID)
                setGameData(game);
        });
    }, []);

    const handleGameQuantity = {
        add() {
            setGameQuanttity(gameQuantity + 1);
        },
        remove() {
            if (gameQuantity > 1)
                setGameQuanttity(gameQuantity - 1);
        }
    }

    const handleProductBuy = {
        add() {
            let cartItens = cart.list;

            if (cartItens.length == 0) {
                gameData.quantity = gameQuantity;
                cartItens.push(gameData);
            }
            else {
                let isAlreadyAdded = false;
                let position = null;
                
                cartItens.map((cartIten, index) => {
                    if (cartIten.id == gameID) {
                        isAlreadyAdded = true;
                        position = index;
                    }
                });

                if (isAlreadyAdded) {
                    cartItens[position].quantity += gameQuantity;
                }
                else {
                    gameData.quantity = gameQuantity;
                    cartItens.push(gameData);
                }
            }

            let cartQuantity = cart.quantity;

            setCart(prevCart => ({
                ...prevCart,
                list: cartItens,
                quantity: cartQuantity + gameQuantity
            }));
        }
    }

    if (gameData != null)
        return (
            <div className='GameInfo'>
                <div className='GameInfo-window'>
                    <button className='GameInfo-close' onClick={hide}>X</button>
                    
                    <div className='GameInfo-image'>
                        <img src={gameData.productImage} />
                    </div>

                    <div className='GameInfo-content'>
                        <span className='GameInfo-title'>{gameData.name}</span>
                        <span className='GameInfo-description'>{gameData.description}</span>
                        <span className='GameInfo-price'>R$<i>{gameData.price.toFixed(2).replace('.', ',')}</i></span>
                    
                        <div className='GameInfo-buy-container'>
                            <div className='GameInfo-quantity'>
                                <button onClick={() => handleGameQuantity.remove()}>-</button>
                                <input type='number' value={gameQuantity} minLength='1' />
                                <button onClick={() => handleGameQuantity.add()}>+</button>
                            </div>

                            <PrimaryButton
                                classe='GameInfo-buy-button'
                                clickAction={() => {handleProductBuy.add()}}
                            >
                                Adicionar ao carrinho
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    return(<></>);
}
 
export default GameInfo;