import React from 'react';
import UserCard from './UserCard';
import { StoreContext } from '@/utils/Store';

function DisplayClients() {
  const { state } = React.useContext(StoreContext);
  const { filteredUser } = state;
  const sortfilteredUser = filteredUser.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return (
    <div className="flex flex-col mt-10 justify-center items-center w-[800px]">
      {/* <Link href="/update">update date</Link> */}
      {sortfilteredUser.length === 0 ? (
        <div className={`text-lg text-red-500 font-bold`}>Not found</div>
      ) : (
        filteredUser.map((users) => <UserCard users={users} key={[]._id} />)
      )}
    </div>
  );
}

export default DisplayClients;
