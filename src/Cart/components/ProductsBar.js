import React from 'react';

import { RiShoppingBasket2Fill } from "react-icons/ri";
import Profile from '../../assets/icons/profile.svg';

import './ProductsBar.css'
function ProductsBar(props) {
    return (
        <div className='product-btns-wrapper'>
            <button className="product-btn">Завтраки</button>
            <button className="product-btn">Raw</button>
            <button className="product-btn">Холодные закуски</button>
            <button className="product-btn">Брускетты</button>
            <button className="product-btn">К вину</button>
            <button className="product-btn">Салаты</button>
            <button className="product-btn">Супы</button>
            <button className="product-btn">Паста и ризотто</button>
            <button className="product-btn">Мясо</button>
            <button className="product-btn">Рыба</button>
            <button className="product-btn">Grill</button>
            <button className="product-btn">Мангал</button>
            <button className="product-btn">Гарниры</button>
        </div>
    );
}

export default ProductsBar;