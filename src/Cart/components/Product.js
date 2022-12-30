import React, { useContext, useState, useEffect } from 'react';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import { CartContext } from "../../shared/context/CartContext";
import { getProductData } from "./productStore";
import Arrow_up from '../../assets/icons/arrow_up.svg';
import Arrow_down from '../../assets/icons/arrow_down.svg'
import Thumbnails from '../../shared/UI/Thumbnails';
import './Product.css';
function Product(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const productData = getProductData(id);
    const [quantity, setQuantity] = useState(null)

    const quantity_ = cart.items.filter(x => x.id === id)[0].quantity;
    useEffect(() => {
        console.log(quantity_)
        setQuantity(quantity_)
    }, [quantity_])

    const images = [
        {
            original: `http://localhost:3000${productData.image}`,
            thumbnail: `http://localhost:3000${productData.image}`,
        },
        {
            original: `http://localhost:3000${productData.image}`,
            thumbnail: `http://localhost:3000${productData.image}`,
        },
        {
            original: `http://localhost:3000${productData.image}`,
            thumbnail: `http://localhost:3000${productData.image}`,
        }
    ];
    return (
        <div className="product-container">
            <div className="product-wrapper">
                <div className="product-thumbnail">
                    <Thumbnails images={images} />
                </div>
                <div className="product_content">
                    <p className="product-title">{productData.title}</p>
                    <span className="product-line"></span>
                    <p className="product-price-info">{productData.price} ₽<span> / {productData.portion}</span> </p>
                    <p className="product-quantity">Количество порций:</p>
                    <div className="product-quantity-wrapper">
                        <form className='productcard-btn-count'>
                            <p className='product-count'>{quantity}</p>
                            <div className='count_prodcut'>
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    cart.removeOneFromCart(id)
                                }} className="product-count-arrow">

                                    <img src={Arrow_down} alt='down' />
                                </button>

                                <button onClick={(e) => {
                                    e.preventDefault()
                                    cart.addOneToCart(id)
                                }} className="product-count-arrow">

                                    <img src={Arrow_up} alt='up' />
                                </button>

                            </div>
                        </form>
                        <button className='productcard-btn'
                            onClick={() => cart.addOneToCart()}
                        >
                            В корзину
                        </button>
                    </div>
                    <span className="product-line"></span>
                    <div className="product-addition">
                        <p className="product-title">Сделать еще вкуснее</p>
                        <div className="addition-item">
                            <p className="addition-item-name">Тигровые креветки 60 г</p>
                            <p className="addition-item-price">450 ₽</p>
                            <label className="addition-item-input">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>

                        </div>
                        <div className="addition-item">
                            <p className="addition-item-name">Томаты / паприка</p>
                            <p className="addition-item-price">80 ₽</p>
                            <label className="addition-item-input">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="addition-item">
                            <p className="addition-item-name">Бекон</p>
                            <p className="addition-item-price">120 ₽</p>
                            <label className="addition-item-input">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="addition-item">
                            <p className="addition-item-name">Сыр чеддер 30 г</p>
                            <p className="addition-item-price">80 ₽</p>
                            <label className="addition-item-input">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;