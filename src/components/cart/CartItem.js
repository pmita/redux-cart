import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className='cartItem-card'>
        <img src={item.image} alt={item.title} />

        <div className='title'>
            <h3>Title</h3>
            <h4>{item.title}</h4>
        </div>

        <div className='price'>
            <h3>Price</h3>
            <h4>{item.price}</h4>
        </div>

        <div className='quantity'>
            <h3>Quantity in Cart</h3>
            <input type='number' min='1' /> 
            <button className='btn'>
                Delete
            </button>
        </div>

    </div>
  );
};

export default CartItem;
