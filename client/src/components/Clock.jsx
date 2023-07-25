import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen,setOpen]=useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const date=new Date().getHours();
      if((date-9)<8 || (date-9)>20)
       setOpen(false);
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Convert the current time to NY timezone
  const options = {
    timeZone: 'America/New_York', // New York timezone
    hour12: false, // 24-hour format
  };

  const nyTime = currentTime.toLocaleString('en-US', options);

  return (
    <div>
      <h2>Current Time (New York): {nyTime}  {isOpen?<Typography variant='h3' sx={{color:'green'}}>Open</Typography >:<Typography  variant='h3' sx={{color:'red'}}>Close</Typography>}</h2>
      
    </div>
  );
};

export default Clock;
