import { CartContext } from '../../shared/context/CartContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Arrow_up from '../../assets/icons/arrow_up.svg';
import Arrow_down from '../../assets/icons/arrow_down.svg'

import './ProductCard.css'
function ProductCard(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    // console.log(cart.items);

    function getFileName(path, isExtension) {

        var fullFileName;

        // replace \ to /
        while (path.indexOf("\\") !== -1) {
            path = path.replace("\\", "/");
        }

        fullFileName = path.split("/").pop();
        return (isExtension) ? fullFileName : fullFileName.slice(0, fullFileName.lastIndexOf("."));
    }
    return (
        <div className='productcard-wrapper' id={product.id}>
            <NavLink to={`/delivery/${product.type}/${getFileName(product.title)}`} onClick={props.selectedProduct}>
                <img src={product.image} alt={product.title} />
            </NavLink>

            <div className='product-content'>
                <p className='product-name'>{product.title}</p>
                <p className='product-price'>{product.price} ₽</p>
                {productQuantity > 0 ?
                    <>
                        <form className='productcard-btn-count'>
                            <p className='product-count'>{productQuantity}</p>
                            <div className='count_prodcut'>
                                <button sm="6" onClick={(e) => {
                                    e.preventDefault()
                                    cart.removeOneFromCart(product.id)
                                }} className="product-count-arrow">

                                    <img src={Arrow_down} alt='down' />
                                </button>

                                <button sm="6" onClick={(e) => {
                                    e.preventDefault()
                                    cart.addOneToCart(product.id)
                                }} className="product-count-arrow">

                                    <img src={Arrow_up} alt='up' />
                                </button>

                            </div>
                        </form>
                        {/* <button onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</button> */}
                    </>
                    :
                    <button onClick={() => cart.addOneToCart(product.id)} className='productcard-btn' >В корзину</button>
                }
            </div>
        </div>
    )
}

export default ProductCard;