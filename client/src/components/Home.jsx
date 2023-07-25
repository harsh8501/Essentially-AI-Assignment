import React, { useEffect, useState } from 'react'
import Clock from './Clock'

import { MarketData } from '../services/MarketData'
import DataTable from './Table'
import Exchanges from './Exchanges'
import CalendarPopup from './Calender/DatePicker'
import DailyStats from './DailyStats'
import { getTickerDetails } from '../services/api'
import StatsSelected from './StatsSelected'
import { Typography } from '@mui/material'
import { getDate } from '../services/MarketData';


const Home = () => {
  const tmp_date=getDate();
  const [allTicker, setAllTicker] = useState([]);
  const [selectedTicker,setTicker]=useState('');
  const [date,setDate]=useState(tmp_date);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await MarketData();
        setAllTicker(data.data);
       
      } catch (error) {
       console.log(error)
      }
    };
    fetchData();
  }, [allTicker===[]]);
  useEffect(()=>{
    const fetchData = async () => {
      try {
        if(selectedTicker==='')
         return
        const data = await getTickerDetails(selectedTicker,date);
       
      } catch (error) {
       console.log(error)
      }
    };
    fetchData();
  },[selectedTicker]);
  return (
    <div>
      <Typography variant='h2' sx={{alignContent:'center'}}>New York Stock Exchange (NYSE)</Typography> 
      <Clock/>
      <div sx={{height:'40%'}}>
      <CalendarPopup setDate={setDate} />
      </div>
      <div>
         
          <h1>Top 50 Stocks Ticker Evaluations For WholeSome</h1>
          <DataTable AllTickerData={allTicker} setTicker={setTicker}/>
      </div>
      <div>
            {selectedTicker!==""?
            <div>
              <StatsSelected label={selectedTicker} date={date}/>
              <DailyStats stats={selectedTicker} />
              </div>
            :""
            }
      </div>
      <div>
          <Exchanges/>
      </div>
      
    </div>
  )
}

export default Home
