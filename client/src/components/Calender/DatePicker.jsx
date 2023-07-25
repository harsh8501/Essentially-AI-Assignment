import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Typography } from '@mui/material';

const CalendarPopup = ({setDate}) => {
  const [selectedDate, setSelectedDate] = useState(null);


  const formatDate = (date) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    setDate(`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
    <Typography>Select Date for Stocks Evaluations"By Default(Yesterday)"</Typography>
      <DatePicker selected={selectedDate} onChange={handleDateChange} />
      {selectedDate && <p>Selected date: {formatDate(selectedDate)}</p>}
    </div>
  );
};

export default CalendarPopup;
