
import { productsArray } from '../components/productStore';
import ProductCard from '../components/ProductCard';
// [{... }, {... }, {... }]
function Store() {

    return (
        <>
            <h1 align="center" className="p-3">Welcome to the store!</h1>
            <div xs={1} md={3} className="g-4">
                {productsArray.map((product, idx) => (
                    <div align="center" key={idx}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Store;