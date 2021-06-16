import React, { Component } from 'react';

import styles from './ProductCardTitle.module.scss';

export default class ProductCardTitle extends Component {
    render() {
        return (
            <>
                <div className={styles.product_title}>{this.props.name}</div>
            </>
        );
    }
}
