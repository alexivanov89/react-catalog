import React from 'react';
import cn from 'classnames';
import styles from './ProductCardPrice.module.scss';

const ProductCardPrice = ({ price, classes }) => {
    return (
        <>
            <div className={cn(styles.product_price, classes)}>${price.value}</div>
        </>
    );
};

export default ProductCardPrice;
