import React from 'react';

import styles from './ProductCardTitle.module.scss';

const ProductCardTitle = ({ name }) => {
    return (
        <>
            <div className={styles.product_title}>{name}</div>
        </>
    );
};

export default ProductCardTitle;
