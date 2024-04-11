import React from 'react';

const ProductItem = ({ product, onRemove }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Available: {product.available ? 'Yes' : 'No'}</p>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductItem;
