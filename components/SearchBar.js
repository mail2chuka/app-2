import React, { useContext } from "react";
import { StoreContext } from "@/utils/Store";

export default function SearchBar() {
  const { state, dispatch } = useContext(StoreContext);
  const handleChange = (e) => {
    dispatch({
      type: "SET_SEARCH_VALUE",
      payload: e.target.value.toLowerCase(),
    });
    console.log(dispatch);
  };
  const handleClick = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <div className="flex ">
      <div className="flex-4 w-screen top-10 mx-4">
        <input
          className="w-full top-10 text-center p-4 rounded-full border-4 border-gray-400 bg-gray-200"
          placeholder="Search..."
          value={state.searchValue}
          onChange={handleChange}
          autoFocus={true}
        ></input>
      </div>{" "}
      <div className=" flex-1 clear-both overflow-none">
        {" "}
        <button
          className="border-4 shadow-md font-mono font-bold rounded-full p-4"
          onClick={handleClick}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
