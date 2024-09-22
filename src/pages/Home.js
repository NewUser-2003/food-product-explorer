import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { fetchProductsByCategory, searchProductsByName } from '../utils/api';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import SortOptions from '../components/SortOptions';
import Pagination from '../components/Pagination';

const Home = () => {
    const { products, setProducts, filters } = useContext(ProductContext);

    useEffect(() => {
        const fetchData = async () => {
            if (filters.search) {
                const searchedProducts = await searchProductsByName(filters.search);
                setProducts(searchedProducts);
            } else {
                const categoryProducts = await fetchProductsByCategory(filters.category || 'beverages');
                setProducts(categoryProducts);
            }
        };
        fetchData();
    }, [filters, setProducts]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Food Product Explorer</h1>
            <div className="flex gap-4 mb-4">
                <SearchBar />
                <CategoryFilter />
                <SortOptions />
            </div>
            <div className="grid grid-cols-3 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.code} product={product} />
                ))}
            </div>
            <Pagination />
        </div>
    );
};

export default Home;

