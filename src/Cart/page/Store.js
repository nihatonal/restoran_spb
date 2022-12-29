import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../../assets/productsData';
import ProductCard from '../components/ProductCard';
import ProductsBar from '../components/ProductsBar';
import Contact from '../../shared/components/Contact';
import Product from '../components/Product';
// [{... }, {... }, {... }]

import './Store.css';
function Store() {
    const navigate = useNavigate();
    const [foods, setFoods] = useState([]);
    const [foodType, setFoodType] = useState('breakfast');
    const [activeBtn, setActiveBtn] = useState('false');
    const [currentProduct, setCurrentProduct] = useState(null)

    useEffect(() => {
        setFoods(productsData.filter((x) => x.type === foodType))
    }, [foodType]);

    const selectedProductHandler = (e) => {
        console.log(e.target.id)
        setCurrentProduct(e.target.id)
    }
    return (
        <div className='products-container'>
            <ProductsBar
                onClick={(e) => {
                    console.log(e.target.id)
                    setFoodType(e.target.id);
                    setActiveBtn(!activeBtn);
                    navigate('/delivery')
                }}
                active={foodType}
            />
            {currentProduct ? <Product /> : <div className='products-wrapper'>
                {productsData && foods.map((product, idx) => (

                    <ProductCard product={product} />

                ))}
            </div>}
            <Contact />
        </div>
    )
}

export default Store;