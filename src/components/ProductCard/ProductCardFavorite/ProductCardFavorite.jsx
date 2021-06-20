import React, { useState } from 'react';
import { ReactComponent as Heart } from '../../../static/heart.svg';
import cn from 'classnames';

import styles from './ProductCardFavorite.module.scss';

const ProductCardFavorite = ({ like, classes }) => {
    const [favorite, setFavorite] = useState(like);
    const handlerClick = () => {
        setFavorite((prevState) => {
            return (prevState = !prevState);
        });
    };
    return (
        <>
            <div className={cn(styles.favorite, classes)}>
                <button className={styles.heart}>
                    <Heart className={cn(favorite && styles.active)} onClick={handlerClick} />
                </button>
            </div>
        </>
    );
};

export default ProductCardFavorite;
