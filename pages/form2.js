// Import React and React Hook Form
import React from 'react';
import { useForm } from 'react-hook-form';

// Import axios
import axios from 'axios';

// Create a form component
const ProductForm = () => {
  // Use useForm hook to handle form state and validation
  const { register, handleSubmit, errors } = useForm();

  // Define a function to handle form submission
  const onSubmit = async (data) => {
    // Create a FormData object from the form element
    const formData = new FormData(document.getElementById('product-form'));

    // Send a POST request to the API endpoint with formData as the body
    try {
      const response = await axios.post('/api/products', formData);
      // Handle success
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.log(error.message);
    }
  };

  // Return the JSX for the form component
  return (
    <form id="product-form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      {<p>Name is required</p>}

      <label htmlFor="price">Price</label>
      <input type="number" id="price" name="price" />
      {<p>Price is required</p>}

      <label htmlFor="image">Image</label>
      <input type="file" id="image" name="image" />
      {<p>Image is required</p>}

      <button type="submit">Create Product</button>
    </form>
  );
};

export default ProductForm;
