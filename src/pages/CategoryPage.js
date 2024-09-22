// src/pages/CategoryPage.js
import React, { useEffect, useState } from 'react';
import { fetchProductsByCategory } from '../utils/api'; // Adjust the path to your API utility

const CategoryPage = ({ match }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Get the category from URL params
    const category = match.params.category;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const productsData = await fetchProductsByCategory(category);
                setProducts(productsData);
            } catch (err) {
                setError('Failed to load products.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Products in {category}</h1>
            {products.length === 0 ? (
                <p>No products found in this category.</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>{product.product_name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CategoryPage;
