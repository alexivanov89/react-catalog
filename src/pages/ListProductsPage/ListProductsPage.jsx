import React, { Component } from 'react';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';

import styles from './ListProductsPage.module.scss';

export default class ListProductsPage extends Component {
    state = {
        products: null,
    };

    componentDidMount(prop, state) {
        this.getData();
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    getData = async () => {
        try {
            const res = await fetch('http://localhost:3006/item');
            const data = await res.json();
            const products = data.content;
            this.setState({
                products: products,
            });
        } catch (e) {
            console.log('ERRR', e);
        }
    };

    render() {
        const { products } = this.state;
        console.log(products);
        return (
            <>
                <Header />
                <main>
                    <div className={styles.products}>
                        {!!products ? (
                            products.map(({ description, id, like, name, picture, price }) => {
                                return (
                                    <ProductCard
                                        key={id}
                                        description={description}
                                        id={id}
                                        like={like}
                                        name={name}
                                        picture={picture}
                                        price={price}
                                    />
                                );
                            })
                        ) : (
                            <div>Loading...</div>
                        )}
                    </div>
                </main>
            </>
        );
    }
}
