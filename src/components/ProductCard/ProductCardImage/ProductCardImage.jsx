import React from 'react';

import styles from './ProductCardImage.module.scss';
const baseURL = 'http://localhost:3006';

const ProductCardImage = ({ picture }) => {
    return (
        <>
            <div className={styles.product_image}>
                <a href='../detailed-paige.html'>
                    <img src={`${baseURL}${picture.path}`} alt={`${baseURL}${picture.alt}`} />
                </a>
            </div>
        </>
    );
};

export default ProductCardImage;
