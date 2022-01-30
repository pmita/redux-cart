import React from 'react';

const ProductItem = ({ item }) => {
  return (
    <div className='productItem-card'>
        <img src={item.image} alt={item.title} />
        <div className='productItem-details'>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <p>{item.qtyInStock}</p>
            <p>{item.description}</p>
            <button className='btn'>Add to Cart</button>
        </div>
    </div>
  );
};

export default ProductItem;
