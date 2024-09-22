const BASE_URL = "https://world.openfoodfacts.org";

// Fetch products by category
export const fetchProductsByCategory = async (category) => {
    try {
        const response = await fetch(`${BASE_URL}/category/${category}.json`);
        if (!response.ok) {
            throw new Error(`Failed to fetch products for category: ${category}`);
        }
        const data = await response.json();
        return data.products || [];
    } catch (error) {
        console.error('Error fetching products by category:', error);
        return [];  // Return empty array on error to avoid breaking the UI
    }
};

// Search products by name
export const searchProductsByName = async (name) => {
    try {
        const response = await fetch(`${BASE_URL}/cgi/search.pl?search_terms=${name}&json=true`);
        if (!response.ok) {
            throw new Error(`Failed to search products by name: ${name}`);
        }
        const data = await response.json();
        return data.products || [];
    } catch (error) {
        console.error('Error searching products by name:', error);
        return [];  // Return empty array on error
    }
};

// Fetch product details by barcode
export const fetchProductDetailsByBarcode = async (barcode) => {
    try {
        const response = await fetch(`${BASE_URL}/api/v0/product/${barcode}.json`);
        if (!response.ok) {
            throw new Error(`Failed to fetch product details for barcode: ${barcode}`);
        }
        const data = await response.json();
        return data.product || {};
    } catch (error) {
        console.error('Error fetching product details by barcode:', error);
        return {};  // Return empty object on error
    }
};
