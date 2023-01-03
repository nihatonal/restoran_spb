import React from 'react';

import './ProductsBar.css'
function ProductsBar(props) {


    return (
        <div className={`product-btns-wrapper ${props.className}`} style={props.style}>
            <button onClick={props.onClick} id='breakfast' className={props.active === 'breakfast' ? `product-btn active-btn` : 'product-btn'}>Завтраки</button>
            <button onClick={props.onClick} id='raw' className={props.active === 'raw' ? `product-btn active-btn` : 'product-btn'}>Raw</button>
            <button onClick={props.onClick} id='cold_snakes' className={props.active === 'cold_snakes' ? `product-btn active-btn` : 'product-btn'}>Холодные закуски</button>
            <button onClick={props.onClick} id='bruschettas' className={props.active === 'bruschettas' ? `product-btn active-btn` : 'product-btn'}>Брускетты</button>
            <button onClick={props.onClick} id='wine' className={props.active === 'wine' ? `product-btn active-btn` : 'product-btn'}>К вину</button>
            <button onClick={props.onClick} id='salad' className={props.active === 'salad' ? `product-btn active-btn` : 'product-btn'}>Салаты</button>
            <button onClick={props.onClick} id='soup' className={props.active === 'soup' ? `product-btn active-btn` : 'product-btn'}>Супы</button>
            <button onClick={props.onClick} id='pasta' className={props.active === 'pasta' ? `product-btn active-btn` : 'product-btn'}>Паста и ризотто</button>
            <button onClick={props.onClick} id='meat' className={props.active === 'meat' ? `product-btn active-btn` : 'product-btn'}>Мясо</button>
            <button onClick={props.onClick} id='fish' className={props.active === 'fish' ? `product-btn active-btn` : 'product-btn'}>Рыба</button>
            <button onClick={props.onClick} id='grill' className={props.active === 'grill' ? `product-btn active-btn` : 'product-btn'}>Grill</button>
            <button onClick={props.onClick} id='mangal' className={props.active === 'mangal' ? `product-btn active-btn` : 'product-btn'}>Мангал</button>
            <button onClick={props.onClick} id='garnish' className={props.active === 'garnish' ? `product-btn active-btn` : 'product-btn'}>Гарниры</button>
        </div>
    );
}

export default ProductsBar;