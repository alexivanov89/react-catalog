import React from 'react';
import { ReactComponent as Heart } from '../../../static/heart.svg';
import cn from 'classnames';

import styles from './ProductCardFavorite.module.scss';

const ProductCardFavorite = ({ like }) => {
    return (
        <>
            <div className={styles.favorite}>
                <button className={styles.heart}>
                    <Heart className={cn(like && styles.active)} />
                </button>
            </div>
        </>
    );
};

export default ProductCardFavorite;
