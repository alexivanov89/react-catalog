import React from 'react';
import Buttons from './Buttons';
import SearchInput from './SearchInput';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <SearchInput />
                <Buttons />
            </div>
        </>
    );
};

export default Header;
