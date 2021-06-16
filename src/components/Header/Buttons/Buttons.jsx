import React, { Component } from 'react';
import { ReactComponent as Cart } from '../../../static/cart.svg';
import { ReactComponent as Account } from '../../../static/account.svg';

import styles from './Buttons.module.scss';

export default class Buttons extends Component {
    render() {
        return (
            <>
                <div className={styles.buttons}>
                    <a href='#'>
                        <Cart />
                    </a>
                    <a href='#'>
                        <Account />
                    </a>
                </div>
            </>
        );
    }
}
