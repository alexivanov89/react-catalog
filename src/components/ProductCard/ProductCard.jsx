import React from 'react';
import { NavLink } from 'react-router-dom';

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
                <NavLink to='/item/:itemId'>
                    <ProductCardImage picture={picture} />
                </NavLink>
                <NavLink to='/item/:itemId'>
                    <ProductCardTitle name={name} />
                </NavLink>

                <ProductCardPrice price={price} />
            </div>
        </>
    );
};

export default ProductCard;
