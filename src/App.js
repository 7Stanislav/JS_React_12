import React from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
      <h1>Product Catalog</h1>
      <ProductForm />
      <h2>Products</h2>
      <ProductList />
    </div>
  );
}

export default App;
