import React from 'react';

import styles from './ProductCard.module.scss';
import ProductCardFavorite from './ProductCardFavorite';
import ProductCardImage from './ProductCardImage';
import ProductCardPrice from './ProductCardPrice';
import ProductCardTitle from './ProductCardTitle';

const ProductCard = ({ description, id, like, name, picture, price }) => {
    return (
        <>
            <div className={styles.products__item}>
                <ProductCardFavorite like={like} />
                <ProductCardImage picture={picture} />
                <ProductCardTitle name={name} />
                <ProductCardPrice price={price} />
            </div>
        </>
    );
};

export default ProductCard;
