import React, { Component } from 'react';
import Buttons from './Buttons';
import SearchInput from './SearchInput';

import styles from './Header.module.scss';

export default class Header extends Component {
    render() {
        return (
            <>
                <div className={styles.header}>
                    <SearchInput />
                    <Buttons />
                </div>
            </>
        );
    }
}
