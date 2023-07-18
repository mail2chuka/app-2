import { useRouter } from "next/router";
import React, { useState } from "react";
const GetReport = ({ user }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [nextDay, setNextDay] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();
  const updateStart = (e) => {
    const selectedDate = new Date(e.target.value);
    setStartDate(selectedDate);

    const next = new Date(selectedDate);
    next.setDate(next.getDate() + 1);
    setNextDay(next);
  };
  const updateEnd = (e) => {
    const selectedDate = new Date(e.target.value);
    setEndDate(selectedDate);
  };
  const printReport = async (event) => {
    event.preventDefault();
    router.push(
      `/reportView?startDate=${startDate}&endDate=${endDate}&userId=${user._id}&userName=${user.name}`
    );
  };
  return (
    <div>
      <form onSubmit={printReport}>
        <h1>select Date range</h1>
        <div>
          {" "}
          <label htmlFor="firstDate">Start Date</label>{" "}
          <input
            name="firstDate"
            value={startDate.toISOString().split("T")[0]} // Display in input format
            placeholder="date"
            type="date"
            onChange={updateStart}
          ></input>
          {startDate.toISOString().split("T")[0]}
          <label htmlFor="endDate"> End Date</label>{" "}
          <input
            name="endDate"
            value={endDate.toISOString().split("T")[0]} // Display in input format
            placeholder="date"
            type="date"
            min={nextDay.toISOString().split("T")[0]}
            onChange={updateEnd}
          ></input>{" "}
          {endDate.toISOString().split("T")[0]}
        </div>
        <div>
          <button>Get Report</button>
        </div>
      </form>
    </div>
  );
};

export default GetReport;
