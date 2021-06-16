import React, { Component } from 'react';
import { ReactComponent as Heart } from '../../../static/heart.svg';
import cn from 'classnames';

import styles from './ProductCardFavorite.module.scss';

export default class ProductCardFavorite extends Component {
    render() {
        return (
            <>
                <div className={styles.favorite}>
                    <button className={styles.heart}>
                        <Heart className={cn(this.props.like && styles.active)} />
                    </button>
                </div>
            </>
        );
    }
}
