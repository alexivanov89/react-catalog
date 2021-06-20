import React, { useState, useEffect } from 'react';
import DetailProductCard from '../../components/DetailProductCard';

// import styles from './DetailProductsPage.module.scss';

const DetailProductsPage = () => {
    const [product, setProduct] = useState(null);

    const ids = '571fc60d-ea2c-469e-a5b6-c229d31f195d';

    const getData = async (id) => {
        try {
            const res = await fetch(`http://localhost:3006/item/:${id}`);
            if (res) {
                const data = await res.json();
                const catalog = data.content;
                setProduct(catalog);
            }
        } catch (e) {
            console.log('ERROR', e);
        }
    };

    useEffect(() => {
        getData(ids);
    }, []);

    return (
        <>
            <main>
                {product ? (
                    <DetailProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        info={product.info}
                        details={product.details}
                        like={product.like}
                        picture={product.picture}
                        price={product.price}
                    />
                ) : (
                    <div>Loading...</div>
                )}
            </main>
        </>
    );
};

export default DetailProductsPage;
