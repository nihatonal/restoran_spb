import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../../assets/productsData';
import { CartContext } from "../../shared/context/CartContext";
import ProductCard from '../components/ProductCard';
import ProductsBar from '../components/ProductsBar';
import Contact from '../../shared/components/Contact';
import Product from '../components/Product';


import './Store.css';
function Store() {
    const cart = useContext(CartContext);
    const navigate = useNavigate();
    const [foods, setFoods] = useState([]);
    const [foodType, setFoodType] = useState('breakfast');
    const [activeBtn, setActiveBtn] = useState('false');
    const [currentProduct, setCurrentProduct] = useState(null)

    useEffect(() => {
        setFoods(productsData.filter((x) => x.type === foodType))
    }, [foodType]);

    // const selectedProductHandler = (e) => {
    //     console.log(e.target.id)
    //     setCurrentProduct(e.target.id)
    // }
    return (
        <div className='products-container'>
            <ProductsBar
                onClick={(e) => {
                    console.log(e.target.id)
                    setFoodType(e.target.id);
                    setActiveBtn(!activeBtn);
                    setCurrentProduct(null)
                    navigate('/delivery')

                }}
                active={foodType}
            />
            {currentProduct ? <Product id={currentProduct} /> : <div className='products-wrapper'>
                {productsData && foods.map((product, idx) => (

                    <ProductCard key={idx} product={product} selectedProduct={(e) => {
                        setCurrentProduct(e.target.parentNode.parentNode.id)
                        cart.items.filter(item => item.id === product.id).length !== 1 && cart.addOneToCart(product.id)



                    }} />

                ))}
            </div>}
            <Contact />
        </div>
    )
}

export default Store;