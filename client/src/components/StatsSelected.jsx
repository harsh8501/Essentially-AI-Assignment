import React, { useEffect, useState } from 'react'
import {Box, Typography} from '@mui/material'
import { getImages, getTickerDetails } from '../services/api';

const StatsSelected = ({label,date}) => {
    const [data,setData]=useState(null);
    const [url,setUrl]=useState(null);
    useEffect(()=>{
       const fetchData = async () => {
            try {
                const data = await getTickerDetails(label,date);
                setData(data.results);
               
            } catch (error) {
               console.log(error)
            }
        };
        fetchData();
    },[]);
  return (
    <Box >
    <Typography variant='h4'>Statistic of {label.T}</Typography>
    <Box sx={{display:'flex',flexDirection:'row'}} >
      <Typography >{data?.ticker}</Typography> 
      <Typography sx={{padding:'6px'}} > {date}</Typography> 

    </Box>
    <Box sx={{display:'flex',flexDirection:'row'}} >
      <Typography>{data?.name}</Typography> 
    </Box>
    <Box sx={{display:'flex',flexDirection:'row'}} >
      <Typography>Address : {data?.address?.address1}</Typography> 
      <Typography>City : {data?.address?.city}</Typography> 
      <Typography>Postal Code : {data?.address?.postal_code}</Typography> 
      <Typography>State : {data?.address?.state}</Typography> 
      <Typography>Country : {data?.locale}</Typography> 
    </Box>
    <Box  sx={{display:'flex',flexDirection:'col'}}>
    <Typography>Description : </Typography>
    <p>{data?.description}</p>
    </Box>
    <Box sx={{display:'flex',flexDirection:'row'}} >
    <Typography>Market Capacity : {data?.market_cap}</Typography> 
    <Typography>No .Of Employees : {data?.total_employees}</Typography> 
    <Typography>Postal Code : {data?.list_date}</Typography> 
    <Typography>State : {data?.currency_name}</Typography> 
    <Typography>Click Here : <a href={data?.homepage_url} target='_blank' referrerPolicy='no-referrer'>Home Page</a></Typography> 
  </Box>
    </Box>
  )
}

export default StatsSelected