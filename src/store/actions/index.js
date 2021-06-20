export const PRODUCTS = 'PRODUCTS';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';

export const getProducts = (products) => ({
    type: PRODUCTS,
    payload: products,
});

//TODO filtered by product name
/* export const filteredName = () => ({
    type: FILTER_BY_NAME,
    payload: '',
}); */
