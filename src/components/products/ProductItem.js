import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../store/actions/cartAction';

const ProductItem = ({ item }) => {
  //STATE & VARIABLE
  const dispatch = useDispatch()
  
  const addToCartHandler = () => {
    dispatch(addProductToCart(item))
  }

  return (
    <div className='productItem-card'>
        <img src={item.image} alt={item.title} />
        <div className='productItem-details'>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <p>{item.qtyInStock}</p>
            <p>{item.description}</p>
            <button 
              className='btn'
              onClick={addToCartHandler}  
            >
              Add to Cart
            </button>
        </div>
    </div>
  );
};

export default ProductItem;
