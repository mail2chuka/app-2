import React, { useState } from 'react';

const UpdatePayment = () => {
  const [amount, setAmount] = useState('');
  const [formatted, setFormatted] = useState('');
  const update = (event) => {
    setAmount(
      isNaN(event.target.value)
        ? ''
        : Number(event.target.value.replace(/,/g, ''))
    );
  };

  const submit = () => {
    if (!formatted) {
      return;
    } else {
    }
  };

  return (
    <div>
      <label>Amount Paid: </label>
      <input
        name="amount"
        placeholder="Enter Amount Paid"
        onChange={update}
      ></input>
      <button onClick={submit}>Update </button>
      <div>N {amount.toLocaleString('en-US')}</div>
    </div>
  );
};

export default UpdatePayment;
/* 
create user
create purchase
link user to purchase
create payment
to be able to use date to search 
for a range of payments and range of purchases
*/
