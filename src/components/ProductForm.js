import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/productsSlice';

const ProductForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    available: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(formData));
    setFormData({
      name: '',
      description: '',
      price: '',
      available: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
      <label>
        Available:
        <input type="checkbox" name="available" checked={formData.available} onChange={handleChange} />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
