import React from 'react';
import { ReactComponent as Cart } from '../../../static/cart.svg';
import { ReactComponent as Account } from '../../../static/account.svg';

import styles from './Buttons.module.scss';

const Buttons = () => {
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
};

export default Buttons;
