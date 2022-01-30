import React from 'react';
import CartItem from '../../components/cart/CartItem';

const cartItems = [
    {
        title : 'item 1',
        price : 250,
        image : 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        qtyInCart : 1
    },
    {
        title : 'item 2',
        price : 250,
        image : 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        qtyInCart : 1
    },
]

const CartScreen = () => {
  return (
    <div className='cart-container'>
        <h1>Cart</h1>
        <div className='cart-grid'>
            {cartItems.map(item => <CartItem key={item.title} item={item} />)}
        </div>
    </div>
  );
};

export default CartScreen;
