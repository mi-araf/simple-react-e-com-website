import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import products from '../data/Products.json';

const Home = () => {

    return (
        <div className='page'>
            <div className='home-hero'>
                <h1 className='home-title'>Inspiring React Shop!!</h1>
                <p className='home-subtitle'>Dive into the sea of products with best prices!</p>
            </div>

            <div className='container'>
                <h2 className='page-title'>Available Products</h2>
                <div className=''>
                    <Suspense fallback={<div>Loading...</div>}>
                        <ProductCard products={products}></ProductCard>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Home;