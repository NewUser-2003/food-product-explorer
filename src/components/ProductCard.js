import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="border p-4">
            <img src={product.image_url} alt={product.product_name} className="w-full h-32 object-cover" />
            <h2 className="font-bold">{product.product_name}</h2>
            <p>Category: {product.categories || 'Unknown'}</p>
            <p>Nutritional Grade: {product.nutrition_grade_fr || 'N/A'}</p>
            <div className="mt-2 flex justify-between">
                <Link to={`/product/${product.code}`} className="text-blue-500">Details</Link>
                <button onClick={() => addToCart(product)} className="bg-green-500 text-white p-1 rounded">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;

