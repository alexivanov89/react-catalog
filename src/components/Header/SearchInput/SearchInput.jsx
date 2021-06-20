import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../../static/search.svg';

import styles from './SearchInput.module.scss';

const SearchInput = () => {
    return (
        <>
            <div className={styles.searchInput}>
                <input className={styles.input} type='text' placeholder='Search products' />
                <SearchIcon className={styles.icon} />
                <NavLink to='/' exact>
                    Home
                </NavLink>
            </div>
        </>
    );
};

export default SearchInput;
