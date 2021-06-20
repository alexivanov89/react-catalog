import React from 'react';

import styles from './DetailProductImage.module.scss';
const baseURL = 'http://localhost:3006';

function DetailProductImage({ picture }) {
    return (
        <>
            <div className={styles.product_image}>
                <img src={`${baseURL}${picture.path}`} alt={`${baseURL}${picture.alt}`} />
            </div>
        </>
    );
}

export default DetailProductImage;
