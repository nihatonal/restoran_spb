import { CartContext } from '../../shared/context/CartContext';
import { useContext } from 'react';


import './ProductCard.css'
function ProductCard(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
    return (
        <div className='productcard-wrapper'>
            <img src={product.image} alt={product.title} />
            <div className='product-content'>
                <p className='product-name'>{product.title}</p>
                <p className='product-price'>{product.price} ₽</p>
                {productQuantity > 0 ?
                    <>
                        <form className='productcard-btn'>
                            <p >In Cart: {productQuantity}</p>
                            <div >
                                <button sm="6" onClick={(e) => {
                                    e.preventDefault()
                                    cart.addOneToCart(product.id)
                                }} className="mx-2">+</button>
                                <button sm="6" onClick={(e) => {
                                    e.preventDefault()
                                    cart.removeOneFromCart(product.id)
                                }} className="mx-2">-</button>
                            </div>
                        </form>
                        {/* <button onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</button> */}
                    </>
                    :
                    <button onClick={() => cart.addOneToCart(product.id)}  className='productcard-btn' >В корзину</button>
                }
            </div>
        </div>
    )
}

export default ProductCard;