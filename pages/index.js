import { useContext, useEffect } from "react";
import { StoreContext, StoreProvider } from "@/utils/Store";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "next/router";

import Link from "next/link";
import UpdateDate from "../components/UpdateDate";
import UserCard from "@/components/UserCard";
import db from "@/utils/db";
import User from "@/models/User";
import DisplayClients from "@/components/DisplayClients";

export default function Home({ user }) {
  const { state, dispatch } = useContext(StoreContext);
  useEffect(() => {
    dispatch({ type: "SET_DATA", payload: user });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const router = useRouter();
  const redirect = () => router.push("/regform");
  return (
    <div className="grid grid-cols-1 mt-10 max-w-fit justify-center min-w-fit w-screen px-3 mx-3 md:mx-32">
      <div className="m-2 w-40">
        {" "}
        <button
          onClick={redirect}
          className=" p-2 text-xl w-40 rounded-2xl bg-purple-400"
        >
          {" "}
          Register New Customer
        </button>
      </div>
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
