import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const SearchBar = () => {
    const { setFilters } = useContext(ProductContext);

    const handleSearch = (e) => {
        setFilters((prev) => ({ ...prev, search: e.target.value }));
    };

    return (
        <input
            type="text"
            placeholder="Search for products"
            onChange={handleSearch}
            className="border p-2"
        />
    );
};

export default SearchBar;
