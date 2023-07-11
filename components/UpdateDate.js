import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* To set payment due date for a customer */
export default function UpdateDate({ user }) {
  const initialDate = {
    date: '',
  };
  const [dateState, setdateState] = useState(initialDate);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setdateState({
      ...dateState,
      [name]: value,
    });
  };
  const UpdateDueDate = () => {
    const data = {
      name: user.name,
      paymentDueDate: dateState.date,
    };
    axios
      .post('/api/updateDate', data)
      .then((response) => {
        toast.success(`${date} is the new expected Payment date`);
      })
      .catch((error) => {
        toast.error('There has been an error, please consult system Admin');
      });
    setdateState(initialDate);
  };
  return (
    <div>
      <ToastContainer position="top-center" limit={1} />
      <label htmlFor="date">Update due Date</label>
      <input
        className="text-xl mb-4"
        name="date"
        type="date"
        value={dateState.date}
        onChange={handleChange}
      ></input>{' '}
      <button onClick={UpdateDueDate}> Update</button>
    </div>
  );
}
