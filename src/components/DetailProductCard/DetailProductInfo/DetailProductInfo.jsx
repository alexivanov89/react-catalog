import React from 'react';
import DetailProductCommerce from './DetailProductCommerce';
import DetailProductName from './DetailProductName';
import DetailProductDescription from './DetailProductDescription';

import styles from './DetailProductInfo.module.scss';

function DetailProductInfo({ name, description, info, details, like, price }) {
    return (
        <>
            <div className={styles.product_info}>
                <DetailProductName name={name} info={info} />
                <DetailProductDescription description={description} details={details} />
                <DetailProductCommerce price={price} like={like} />
            </div>
        </>
    );
}

export default DetailProductInfo;
