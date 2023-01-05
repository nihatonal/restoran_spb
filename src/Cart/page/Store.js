import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimateHeight from 'react-animate-height';
import { productsData } from '../../assets/productsData';
import { CartContext } from "../../shared/context/CartContext";

import ProductCard from '../components/ProductCard';
import ProductsBar from '../components/ProductsBar';
import Product from '../components/Product';

import { FaFilter } from 'react-icons/fa';
import './Store.css';
function Store() {
    const cart = useContext(CartContext);
    const navigate = useNavigate();
    const [foods, setFoods] = useState([]);
    const [foodType, setFoodType] = useState('breakfast');
    const [activeBtn, setActiveBtn] = useState('false');
    const [currentProduct, setCurrentProduct] = useState(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setFoods(productsData.filter((x) => x.type === foodType))
    }, [foodType]);

    return (
        <div className='products-container'>
            <div onClick={() => setHeight(height === 0 ? 'auto' : 0)} className="filter-icon">
                < FaFilter />
            </div>
            <AnimateHeight
                id="example-panel"
                duration={500}
                height={height} // see props documentation below
            >
                <ProductsBar

                    onClick={(e) => {
                        setFoodType(e.target.id);
                        setActiveBtn(!activeBtn);
                        setCurrentProduct(null);
                        setHeight(0)
                        navigate(`/delivery/${e.target.id}`)

                    }}
                    active={foodType}
                />
            </AnimateHeight>
            <ProductsBar
                className='display-none'
                onClick={(e) => {
                    setFoodType(e.target.id);
                    setActiveBtn(!activeBtn);
                    setCurrentProduct(null);
                    setHeight(0)
                    navigate(`/delivery/${e.target.id}`)

                }}
                active={foodType}
            />
            {
                currentProduct ?
                    <Product
                        id={currentProduct}
                        close={() => {
                            console.log('asd')
                            setCurrentProduct(null)
                            navigate(`/delivery/${foodType}`)
                        }}
                    />
                    :
                    <div className='products-wrapper'>
                        {productsData && foods.map((product, idx) => (

                            <ProductCard
                                key={idx}
                                product={product}
                                selectedProduct={(e) => {
                                    setCurrentProduct(e.target.parentNode.parentNode.id)
                                    cart.items.filter(item => item.id === product.id).length !== 1 && cart.addOneToCart(product.id)



                                }}
                            />

                        ))}
                    </div>
            }
            {/* <Contact /> */}
        </div >
    )
}

export default Store;