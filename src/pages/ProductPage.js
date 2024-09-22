import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { fetchProductDetailsByBarcode } from '../utils/api';

const ProductPage = () => {
    const [product, setProduct] = useState(null);
    const { barcode } = useParams(); // Get barcode using useParams

    useEffect(() => {
        const fetchProduct = async () => {
            const productData = await fetchProductDetailsByBarcode(barcode);
            setProduct(productData);
        };
        fetchProduct();
    }, [barcode]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <img src={product.image_url} alt={product.product_name} className="w-full h-64 object-cover" />
            <h1 className="text-2xl font-bold mt-4">{product.product_name}</h1>
            <p><strong>Ingredients:</strong> {product.ingredients_text || 'Not available'}</p>
            <p><strong>Nutrition Grade:</strong> {product.nutrition_grade_fr || 'N/A'}</p>
            <div>
                <h3 className="text-lg font-bold mt-4">Nutritional Values</h3>
                <ul>
                    <li>Energy: {product.nutriments.energy} kJ</li>
                    <li>Fat: {product.nutriments.fat} g</li>
                    <li>Carbohydrates: {product.nutriments.carbohydrates} g</li>
                    <li>Proteins: {product.nutriments.proteins} g</li>
                </ul>
            </div>
        </div>
    );
};

export default ProductPage;
