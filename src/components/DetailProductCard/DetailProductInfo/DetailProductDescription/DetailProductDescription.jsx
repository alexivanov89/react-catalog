import React from 'react';

import styles from './DetailProductDescription.module.scss';

function DetailProductDescription({ description, details }) {
    return (
        <>
            <div className={styles.product_detail}>
                <h4 className={styles.title_detail}>{description}</h4>
                <p className={styles.text_detail}>{details}</p>
            </div>
        </>
    );
}

export default DetailProductDescription;
