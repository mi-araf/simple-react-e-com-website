import React from 'react';
import ProductCardNow from './ProductCardNow';

const ProductCard = ({ products }) => {
    return (
        <div className='product-grid'>
            {
                products.map((product) => (
                    <ProductCardNow key={product.id} product={product}></ProductCardNow>
                ))
            }
        </div>
    );
};

export default ProductCard;