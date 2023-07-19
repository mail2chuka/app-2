import React from "react";
import UserCard from "./UserCard";
import { StoreContext } from "@/utils/Store";

function DisplayClients() {
  const { state } = React.useContext(StoreContext);
  const { filteredUser } = state;
  const sortfilteredUser = filteredUser.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return (
    <div className="grid grid-cols-1 mt-10 justify-center items-center w-4/5">
      {/* <Link href="/update">update date</Link> */}
      <ul>
        {" "}
        {sortfilteredUser.length === 0 ? (
          <li className="flex-1 text-lg text-red-500 font-bold">Not found</li>
        ) : (
          filteredUser.map((users) => <UserCard users={users} key={[]._id} />)
        )}
      </ul>
    </div>
  );
}

export default DisplayClients;
