import React, { useContext, useState, useEffect } from 'react';

import { CartContext } from "../context/CartContext";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import Profile from '../../assets/icons/profile.svg';
import { getProductData } from "../../Cart/components/productStore";
import Arrow_up from '../../assets/icons/arrow_up.svg';
import Arrow_down from '../../assets/icons/arrow_down.svg'


import './DeliveryBar.css';
function DeliveryBar(props) {
    const cart = useContext(CartContext);
    const quantity = cart.items.length;
    const [openModal, setOpenModal] = useState(false);
    const [scroll, setScroll] = useState(false);
    // const productData = getProductData(id);
    const cartHandler = () => {
        setOpenModal(!openModal);
    }


    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
            setOpenModal(false);
        });
    }, []);
    return (
        <div className={scroll ? "delivery-bar-wrapper delivery-bar-top" : "delivery-bar-wrapper"}>
            <p>Личный кабинет</p>
            <img src={Profile} alt="Profile" className='profile-icon'/>
            <div className={'delivery-cart-wrapper'}
                onClick={cartHandler}
                // onMouseEnter={cartHandler}
                style={openModal ? { "color": '#b59571' } : null}
            >
                {quantity > 0 && (<p >{cart.items.reduce((n, { quantity }) => n + quantity * 1, 0)}</p>)}
                <RiShoppingBasket2Fill className='delivery-cart' />
            </div>

            <div className={openModal ? "cart-modal-wrapper open-modal" : "cart-modal-wrapper"} onMouseLeave={() => setOpenModal(false)}>
                <h3 className="cart-modal-title">Корзина заказа</h3>
                <div className='cart-modal-products'>
                    <div className="cart-modal-products-wrapper">
                        {cart.items.map((item) =>
                            <div className='cart-modal-product' key={item.id}>
                                <img src={getProductData(item.id).image} alt={getProductData(item.id).title} />
                                <div className='cart-modal-product-info'>
                                    <p className='cart-modal-product-name'>{getProductData(item.id).title}</p>
                                    <ul>
                                        {item.additions && item.additions.map((el) =>
                                            <li key={el.id} id={el.id} className='cart-modal-product-addition'>{el.name} / {el.price_additon} ₽
                                                <span onClick={(e) => cart.removeAdditionsToCart(item.id, e.target.parentNode.id)}>x</span>

                                            </li>
                                        )}
                                    </ul>
                                </div>

                                <div className='cart-modal-quantity-wrapper'>
                                    <p className='product-count'>{item.quantity}</p>
                                    <div className='count_prodcut'>
                                        <button onClick={(e) => {
                                            e.preventDefault()
                                            cart.removeOneFromCart(item.id)
                                        }} className="product-count-arrow">

                                            <img src={Arrow_down} alt='down' />
                                        </button>

                                        <button onClick={(e) => {
                                            e.preventDefault()
                                            cart.addOneToCart(item.id)
                                        }} className="product-count-arrow">

                                            <img src={Arrow_up} alt='up' />
                                        </button>
                                    </div>
                                </div>
                                <div className="product-modal-sum">
                                    <p>{getProductData(item.id).price * item.quantity + item.additions.reduce((n, { price_additon }) => n + price_additon * 1, 0)} ₽</p>
                                </div>

                            </div>
                        )}
                    </div>
                </div>
                <div className='modal-cart-footer'>
                    <p className='modal-summary'>Общая сумма заказа: {cart.getTotalCost()} ₽</p>
                    <button>Оформить заказ</button>
                </div>

            </div>


        </div >
    );
}

export default DeliveryBar;