import React, { useState, useEffect } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProducts, filteredName } from '../../store/actions';

import ProductCard from '../../components/ProductCard';

import styles from './ListProductsPage.module.scss';

const ListProductsPage = () => {
    const [loading, setLoading] = useState(false);
    const [getFetch, setGetFetch] = useState(false);

    const dispatch = useDispatch();

    const storeProducts = useSelector((state) => state.changeProductsReducer);

    const getData = async () => {
        try {
            const res = await fetch('http://localhost:3006/item');
            if (!res.ok) {
                console.error('Could not fetch.', res.status);
                setLoading(false);
            }
            const data = await res.json();
            console.log(res.ok, res.status);

            dispatch(
                getProducts({
                    data,
                })
            );

            setLoading(true);
            setGetFetch(true);
        } catch (e) {
            setLoading(false);
            setGetFetch(false);

            console.log('ERROR', e);
        }
    };

    useEffect(() => {
        getData();
    }, [getFetch]);

    return (
        <>
            <main>
                <div className={styles.products}>
                    {!getFetch ? (
                        <p>Ошибка сети </p>
                    ) : loading ? (
                        storeProducts &&
                        storeProducts.data.content.map(({ description, id, like, name, picture, price }) => {
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
                        <ScaleLoader />
                    )}
                </div>
            </main>
        </>
    );
};

export default ListProductsPage;
