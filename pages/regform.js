import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterForm = () => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    slug: '',
  };
  const [state, setState] = useState(initialState);

  // str = str.replace(/\s/g, "-");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const { name, email, phone, slug } = state;
  const [errorState, seterrorState] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !phone) {
      return;
    }

    const data = {
      name: name.toLowerCase(),
      email: email,
      phone,
      slug: name.toLowerCase().replace(/\s/g, '-'),
    };

    // Save the form data to MongoDB using Axios
    axios
      .post('/api/regUser', data)
      .then((response) => {
        // Handle success
        toast.success(`${name} has been registered successfully`);
        console.log(response.data);
        seterrorState(false);
      })
      .catch((error) => {
        // Handle error

        toast.error('There has been an Error, Please try again later');
        console.log(error.message);
        seterrorState(true);
      });
  };

  return (
    <div
      className="flex
  sm:justify-center sm:items-center w-full"
    >
      <ToastContainer position="top-center" limit={1} />
      <form
        onSubmit={handleSubmit}
        className="border-gray-600 border-4 p-4 mx-5 rounded-2xl my-40 w-full sm:w-4/5 md:max-w-3xl"
      >
        <div className="mb-4">
          {' '}
          <label htmlFor="name" className="text-xl">
            Customer Name
          </label>
          {' :'}
          <input
            className="w-full border-2 text-3xl border-gray-400"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-xl">
            Customer Email
          </label>
          {' :'}{' '}
          <input
            className="w-full border-2 text-3xl border-gray-400"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="text-xl">
            Customer Phone Number
          </label>
          {' :'}
          <input
            className="w-full border-2 text-3xl border-gray-400"
            type="telephone"
            placeholder="Phone Number"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between mb-4 float-right">
          {state.name.length && state.phone.length ? (
            <button
              type="submit"
              className="text-slate-100 px-4 py-2 rounded-full bg-green-700 hover:bg-green-800 active:bg-green-950"
            >
              {' '}
              Register
            </button>
          ) : (
            <button
              type="submit"
              disabled={true}
              className="text-slate-100 text-3xl px-4 py-2 rounded-full bg-slate-400"
            >
              Register
            </button>
          )}
        </div>
        {errorState && (
          <div className="float-right clear-both text-3xl mb-0 text-red-600 text-opacity-100">
            Error, Customer already exists!
          </div>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
