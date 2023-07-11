import React from 'react';

const UpdatePayment = () => {
  return (
    <div>
      <form>
        <label>Amount Paid: </label>
        <input name="amount" placeholder="Enter Amount Paid"></input>
        <button>Update</button>
      </form>
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
