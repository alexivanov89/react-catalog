import React, { Component } from 'react';

import styles from './ProductCardImage.module.scss';
const baseURL = 'http://localhost:3006';

export default class ProductCardImage extends Component {
    render() {
        return (
            <>
                <div className={styles.product_image}>
                    <a href='../detailed-paige.html'>
                        <img src={`${baseURL}${this.props.picture.path}`} alt={`${baseURL}${this.props.picture.alt}`} />
                    </a>
                </div>
            </>
        );
    }
}
