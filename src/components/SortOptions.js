import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const SortOptions = () => {
    const { products, setProducts } = useContext(ProductContext);

    const handleSort = (e) => {
        const sortType = e.target.value;
        const sortedProducts = [...products].sort((a, b) => {
            if (sortType === 'name-asc') {
                return a.product_name.localeCompare(b.product_name);
            } else if (sortType === 'name-desc') {
                return b.product_name.localeCompare(a.product_name);
            } else if (sortType === 'nutrition-asc') {
                return a.nutrition_grade_fr.localeCompare(b.nutrition_grade_fr);
            } else if (sortType === 'nutrition-desc') {
                return b.nutrition_grade_fr.localeCompare(a.nutrition_grade_fr);
            }
            return 0;
        });
        setProducts(sortedProducts);
    };

    return (
        <select onChange={handleSort} className="border p-2">
            <option value="">Sort by</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="nutrition-asc">Nutrition Grade (A-E)</option>
            <option value="nutrition-desc">Nutrition Grade (E-A)</option>
        </select>
    );
};

export default SortOptions;
