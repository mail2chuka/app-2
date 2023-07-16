import React, { useState } from 'react';

const GetReport = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState('');
  const updateStart = (event) => {
    const selectedDate = event.target.value;
    setStartDate(selectedDate);
  };
  const nextDay = new Date(startDate);

  return (
    <div>
      <form>
        <h1>select Date range</h1>
        <div>
          {' '}
          <label htmlFor="firstDate">Start Date</label>{' '}
          <input
            name="firstDate"
            value={startDate}
            placeholder="date"
            type="date"
            onChange={updateStart}
          ></input>
          {nextDay.setDate(nextDay.getDate() + 1)}
          <label htmlFor="endDate"> End Date</label>{' '}
          <input name="endDate" type="date" min={nextDay}></input>
        </div>
      </form>
    </div>
  );
};

export default GetReport;
