import { CartContext } from '../CartContext';
import { useContext } from 'react';

function ProductCard(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
    return (
        <div>
            <div>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                {productQuantity > 0 ?
                    <>
                        <form >
                            <p >In Cart: {productQuantity}</p>
                            <div >
                                <button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</button>
                                <button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</button>
                            </div>
                        </form>
                        <button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</button>
                    </>
                    :
                    <button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</button>
                }
            </div>
        </div>
    )
}

export default ProductCard;