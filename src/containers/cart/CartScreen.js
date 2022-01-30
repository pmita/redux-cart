import React, { useEffect } from 'react';
import CartItem from '../../components/cart/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { listCartItems } from '../../store/actions/cartAction';

const CartScreen = () => {
    //STATE & VARIABLES
    const dispatch = useDispatch();
    const cartItemsList = useSelector((state) => state.cartItemsList);
    const { loading, error, cartItems } = cartItemsList;

    //useEFFECT
    useEffect(() => {
        dispatch(listCartItems())
    }, [dispatch])

  return (
    <div className='cart-container'>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <h1>Cart</h1>
        <div className='cart-grid'>
            {cartItems.map(item => <CartItem key={item.title} item={item} />)}
        </div>
    </div>
  );
};

export default CartScreen;
