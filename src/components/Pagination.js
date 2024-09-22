import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';

const Pagination = () => {
    const { products, setProducts } = useContext(ProductContext);
    const [page, setPage] = useState(1);

    const handleLoadMore = async () => {
        const nextPage = page + 1;
        const response = await fetch(`https://world.openfoodfacts.org/category/${products[0].category}/${nextPage}.json`);
        const data = await response.json();
        setProducts([...products, ...data.products]);
        setPage(nextPage);
    };

    return (
        <button onClick={handleLoadMore} className="border p-2 mt-4">
            Load More
        </button>
    );
};

export default Pagination;
