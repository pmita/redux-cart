import React, { useEffect } from 'react';
import ProductItem from '../../components/products/ProductItem';
// import { products } from '../../utility/products';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../store/actions/productActions';

const ProductScreen = () => {
  //STATE & VARIABLES
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { loading, error, products } = productsList;

  //useEFFECT
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <div className='products-container'>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
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
