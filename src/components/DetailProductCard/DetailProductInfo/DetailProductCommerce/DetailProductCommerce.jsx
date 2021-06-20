import React, { useState } from 'react';
import ProductCardPrice from '../../../ProductCard/ProductCardPrice';
import ProductCardFavorite from '../../../ProductCard/ProductCardFavorite';

import styles from './DetailProductCommerce.module.scss';

function DetailProductCommerce({ price, like }) {
    const [priceInput, setPriceInput] = useState(1);

    const decHandlerClick = () => {
        setPriceInput((prevState) => {
            if (prevState > 1) {
                return --prevState;
            }
        });
    };

    const incHandlerClick = () => {
        setPriceInput((prevState) => {
            return ++prevState;
        });
    };

    return (
        <>
            <div className={styles.product_commerce}>
                <ProductCardPrice classes={styles.product_page_price} price={price} />
                <div className={styles.product_quantity}>
                    <button className={styles.btn} onClick={decHandlerClick}>
                        -
                    </button>
                    <input className={styles.product_input} type='number' value={priceInput} readOnly />
                    <button className={styles.btn} onClick={incHandlerClick}>
                        +
                    </button>
                </div>
                <div className={styles.add_cart}>
                    <a href='/card'>Add to cart</a>
                </div>
                <ProductCardFavorite like={like} classes={styles.product_favorite} />
            </div>
        </>
    );
}

export default DetailProductCommerce;
