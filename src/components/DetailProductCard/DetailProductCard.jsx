import React from 'react';

import styles from './DetailProductCard.module.scss';
import DetailProductImage from './DetailProductImage';
import DetailProductInfo from './DetailProductInfo';

const DetailProductCard = ({ name, description, info, details, like, picture, price }) => {
    return (
        <>
            <div className={styles.product}>
                <DetailProductImage picture={picture} />
                <DetailProductInfo
                    name={name}
                    description={description}
                    info={info}
                    details={details}
                    like={like}
                    price={price}
                />
            </div>
        </>
    );
};

export default DetailProductCard;
