import { useContext, useEffect } from 'react';
import { StoreContext, StoreProvider } from '@/utils/Store';
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'next/router';

import Link from 'next/link';
import UpdateDate from '../components/UpdateDate';
import UserCard from '@/components/UserCard';
import db from '@/utils/db';
import User from '@/models/User';
import DisplayClients from '@/components/DisplayClients';

export default function Home({ user }) {
  const { state, dispatch } = useContext(StoreContext);
  useEffect(() => {
    dispatch({ type: 'SET_DATA', payload: user });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const router = useRouter();
  const redirect = () => router.push('/regform');
  return (
    <div className={`flex  mx-10`}>
      <button
        onClick={redirect}
        className="p-3 text-xl rounded-full bg-slate-400"
      >
        {' '}
        Register New Client
      </button>
      <SearchBar />
      <DisplayClients user={user}></DisplayClients>
    </div>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const user = await User.find().lean();

  return {
    props: { user: user.map(db.convertDocToObj) },
  };
}
