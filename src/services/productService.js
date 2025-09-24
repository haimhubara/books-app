export const getProductList = async (searchTerm) => {
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${searchTerm ? searchTerm : ""}`);
    if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status;
        throw error;
    }
    const data = await response.json();
    return data
}

export const getProduct = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
    if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status;
        throw error;
    }
    const data = await response.json();
    return data;
}

export const getFeaturedList = async () => {
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
    if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status;
        throw error;
    }
    const data = await response.json();
    return data;

}