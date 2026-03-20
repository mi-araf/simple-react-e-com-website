import React from 'react';
import { Link } from 'react-router-dom';

const ProductCardNow = ({ product }) => {
    return (
        <div>
            <div className='product-card'>
                <img className='product-card-image' src={product.image} alt={product.alt} />
                <div className="product-card-content">
                    <h3 className='product-card-name'>{product.name}</h3>
                    <p className='product-card-price'>${product.price}</p>
                    <div className='product-card-actions'>
                        <Link className='product-card-btn btn btn-secondary'>Show Details</Link>
                        <button className='product-card-btn btn btn-primary'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardNow;