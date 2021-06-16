import React, { Component } from 'react';

import styles from './ProductCardPrice.module.scss';

export default class ProductCardPrice extends Component {
    render() {
        return (
            <>
                <div className={styles.product_price}>${this.props.price.value}</div>
            </>
        );
    }
}
