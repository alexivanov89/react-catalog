import React from 'react';

import styles from './DetailProductName.module.scss';

function DetailProductName({ name, info }) {
    return (
        <>
            <div className={styles.product_name}>
                <h3 className={styles.title_name}>{name}</h3>
                <p className={styles.text_name}>{info}</p>
            </div>
        </>
    );
}

export default DetailProductName;
