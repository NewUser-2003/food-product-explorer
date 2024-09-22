import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({ category: '', search: '' });
    
    return (
        <ProductContext.Provider value={{ products, setProducts, filters, setFilters }}>
            {children}
        </ProductContext.Provider>
    );
};
