import React from 'react';

import styles from './ProductCardPrice.module.scss';

const ProductCardPrice = ({ price }) => {
    return (
        <>
            <div className={styles.product_price}>${price.value}</div>
        </>
    );
};

export default ProductCardPrice;
