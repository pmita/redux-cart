import React from 'react';
import ProductItem from '../../components/products/ProductItem';
import { products } from '../../utility/products';

const ProductScreen = () => {
  return (
    <div className='products-container'>
        <h1>Products</h1>
        <div className='products-grid'>
            {products.map(product => (
                <ProductItem item={product} key={product.title}/>
            ))}
        </div>
    </div>
  );
};

export default ProductScreen;
