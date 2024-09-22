import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // For getting the barcode from the URL
import axios from 'axios'; // For making API requests

const ProductDetail = () => {
  const { barcode } = useParams(); // Get the barcode from the route parameter
  const [product, setProduct] = useState(null); // State to store the product details
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  // Fetch product details based on the barcode
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
        );
        setProduct(response.data.product);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product details.');
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [barcode]);

  // Loading state
  if (loading) {
    return <div>Loading product details...</div>;
  }

  // Error state
  if (error) {
    return <div>{error}</div>;
  }

  // Product detail view
  return (
    <div className="product-detail">
      {product ? (
        <>
          <h1>{product.product_name}</h1>
          <img
            src={product.image_url}
            alt={product.product_name}
            className="product-image"
          />
          <div className="product-info">
            <p><strong>Category:</strong> {product.categories}</p>
            <p><strong>Ingredients:</strong> {product.ingredients_text || 'N/A'}</p>
            <p><strong>Nutrition Grade:</strong> {product.nutrition_grades}</p>

            {/* Nutritional Values */}
            {product.nutriments && (
              <div className="nutrition-values">
                <p><strong>Energy:</strong> {product.nutriments['energy-kcal']} kcal</p>
                <p><strong>Fat:</strong> {product.nutriments.fat} g</p>
                <p><strong>Carbs:</strong> {product.nutriments.carbohydrates} g</p>
                <p><strong>Proteins:</strong> {product.nutriments.proteins} g</p>
              </div>
            )}

            {/* Labels (e.g., Vegan, Gluten-free) */}
            {product.labels && (
              <p><strong>Labels:</strong> {product.labels}</p>
            )}
          </div>
        </>
      ) : (
        <p>No product details found.</p>
      )}
    </div>
  );
};

export default ProductDetail;
