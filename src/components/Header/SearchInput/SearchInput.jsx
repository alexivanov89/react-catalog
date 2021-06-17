import React from 'react';
import { ReactComponent as SearchIcon } from '../../../static/search.svg';

import styles from './SearchInput.module.scss';

const SearchInput = () => {
    return (
        <>
            <div className={styles.searchInput}>
                <input className={styles.input} type='text' placeholder='Search products' />
                <SearchIcon className={styles.icon} />
            </div>
        </>
    );
};

export default SearchInput;
