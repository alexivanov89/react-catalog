import React, { Component } from 'react';
import { ReactComponent as SearchIcon } from '../../../static/search.svg';

import styles from './SearchInput.module.scss';

export default class SearchInput extends Component {
    render() {
        return (
            <>
                <div className={styles.searchInput}>
                    <input className={styles.input} type='text' placeholder='Search products' />
                    <SearchIcon className={styles.icon} />
                </div>
            </>
        );
    }
}
