import React from 'react';
import db from '@/utils/db';
import User from '@/models/User';
import GetReport from '@/components/GetReport';
import UpdateDate from '@/components/UpdateDate';
import UpdatePayment from '@/components/UpdatePayment';

export default function userPage(props) {
  // console.log(props);
  const { user } = props;
  return (
    <div>
      <div className="container m-auto grid grid-cols-2">
        <div>Client Name: {user.name}</div>
        <div>
          Account Balance is : N{user.accountBalance.toLocaleString('en-US')}
        </div>
      </div>
      <div className="container m-auto grid grid-cols-2">
        {' '}
        <UpdateDate user={user} />
      </div>
      <div>
        Due Date is : {user.paymentDueDate} or{' '}
        {Math.floor((Date.parse(user.paymentDueDate) - Date.now()) / 86400000)}{' '}
        days
      </div>
      <div className="container m-auto grid grid-cols-2">
        {' '}
        Update payment made <UpdatePayment />
        <GetReport />{' '}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const user = await User.findOne({ slug: slug }).lean();

  await db.disconnect();
  return {
    props: {
      user: user ? db.convertDocToObj(user) : null,
    },
  };
}
