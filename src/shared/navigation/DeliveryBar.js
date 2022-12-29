import React, { useContext } from 'react';

import { CartContext } from "../context/CartContext";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import Profile from '../../assets/icons/profile.svg';

import './DeliveryBar.css';
function DeliveryBar(props) {
    const cart = useContext(CartContext);
    const quantity = cart.items.length;
    const cartHandler = () => {
        console.log('cart: ', cart.items.reduce((n, { quantity }) => n + quantity * 1, 0))
    }
    return (
        <div className="delivery-bar-wrapper">
            <p>Личный кабинет</p>
            <img src={Profile} alt="Profile" />
            <div className='delivery-cart-wrapper' onClick={cartHandler}>
                {quantity > 0 && (<p >{cart.items.reduce((n, { quantity }) => n + quantity * 1, 0)}</p>)}
                <RiShoppingBasket2Fill className='delivery-cart' />
            </div>


        </div >
    );
}

export default DeliveryBar;