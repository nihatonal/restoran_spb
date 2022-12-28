import React, { useState, useEffect } from 'react';
import { productsData } from '../../assets/productsData';
import ProductCard from '../components/ProductCard';
import ProductsBar from '../components/ProductsBar';
// [{... }, {... }, {... }]

import './Store.css';
function Store() {
    const [foods, setFoods] = useState([]);
    const [foodType, setFoodType] = useState('breakfast');

    useEffect(() => {
        setFoods(productsData.filter((x) => x.type === foodType))
    }, [foodType]);


    return (
        <div className='products-container'>
            <ProductsBar />
            <div className='products-wrapper'>
                {productsData && foods.map((product, idx) => (

                    <ProductCard product={product} />

                ))}
            </div>
        </div>
    )
}

export default Store;