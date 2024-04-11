import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../store/productsSlice';
import ProductItem from './ProductItem';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onRemove={handleRemove} />
      ))}
    </div>
  );
};

export default ProductList;
