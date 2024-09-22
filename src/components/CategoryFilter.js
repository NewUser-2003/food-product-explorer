import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';

const CategoryFilter = () => {
    const { setFilters } = useContext(ProductContext);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://world.openfoodfacts.org/categories.json');
            const data = await response.json();
            setCategories(data.tags || []);
        };
        fetchCategories();
    }, []);

    const handleCategoryChange = (e) => {
        setFilters((prev) => ({ ...prev, category: e.target.value }));
    };

    return (
        <select onChange={handleCategoryChange} className="border p-2">
            <option value="">All Categories</option>
            {categories.map((category) => (
                <option key={category.id} value={category.name}>
                    {category.name}
                </option>
            ))}
        </select>
    );
};

export default CategoryFilter;
