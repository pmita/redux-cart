import React, { useState } from 'react';
import { deleteItemFromCart, updateCartQty } from '../../store/actions/cartAction';
import { useDispatch } from 'react-redux';

const CartItem = ({ item }) => {
    //STATE & VARIABLES
    const dispatch = useDispatch()
    const [qty, setQty] = useState(item.qtyInCart)

    //EVENT HANDLERS
    const handleCartQty = (qty) => {
        dispatch(updateCartQty(item.id, qty))
    }

    const handleCartDelete = (item) => {
        dispatch(deleteItemFromCart(item.id))
    }

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
            <input 
                type='number' 
                min='1' 
                value={qty}
                onChange={(e) => {
                    setQty(e.target.value)
                    handleCartQty(e.target.value)
                }}
            /> 
            <button 
                className='btn'
                onClick={handleCartDelete}
            >
                Delete
            </button>
        </div>

    </div>
  );
};

export default CartItem;
