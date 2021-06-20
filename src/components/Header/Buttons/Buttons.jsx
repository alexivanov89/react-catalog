import React from 'react';
import { ReactComponent as Cart } from '../../../static/cart.svg';
import { ReactComponent as Account } from '../../../static/account.svg';

import styles from './Buttons.module.scss';

const Buttons = () => {
    return (
        <>
            <div className={styles.buttons}>
                <a href='/cart'>
                    <Cart />
                </a>
                <a href='/account'>
                    <Account />
                </a>
            </div>
        </>
    );
};

export default Buttons;
