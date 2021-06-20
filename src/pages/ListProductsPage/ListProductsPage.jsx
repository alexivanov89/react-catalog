import React, { useState, useEffect } from 'react';

import ProductCard from '../../components/ProductCard';

import styles from './ListProductsPage.module.scss';

const ListProductsPage = () => {
    const [products, setProducts] = useState(null);

    const getData = async () => {
        try {
            const res = await fetch('http://localhost:3006/item');
            const data = await res.json();
            const products = data.content;
            setProducts(products);
        } catch (e) {
            console.log('ERROR', e);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
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
};

export default ListProductsPage;
