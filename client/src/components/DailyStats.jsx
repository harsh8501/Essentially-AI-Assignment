import React from 'react'
import {TrendingDownOutlined,TrendingUpOutlined,PaidOutlined,EqualizerOutlined,TimelineOutlined} from '@mui/icons-material';
import { Typography } from '@mui/material';
import DailyStatsIcon from './DailyStatsIcon/DailyStatsIcon';

const DailyStats = ({stats}) => {
  return (
    <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
    <Typography variant='h5' sx={{width:'100%'}}>DailyStats</Typography>
    <DailyStatsIcon icon={<TrendingDownOutlined sx={{width:'100px',height:'60px',color:'red'}}/>}
    iconLabel='Lowest Price' value={stats.l}/>
    <DailyStatsIcon icon={<TrendingUpOutlined sx={{width:'100px',height:'60px',color:'green'}}/>}
    iconLabel='Highest Price' value={stats.h}/>
    <DailyStatsIcon icon={<TimelineOutlined sx={{width:'100px',height:'60px',color:'blue'}}/>}
    iconLabel='Open Price' value={stats.o}/>
    <DailyStatsIcon icon={<TimelineOutlined sx={{width:'100px',height:'60px',color:'blue'}}/>}
    iconLabel='Close Price' value={stats.c}/>
    <DailyStatsIcon icon={<PaidOutlined sx={{width:'100px',height:'60px'}}/>}
    iconLabel='Transactions' value={stats.t}/>
    <DailyStatsIcon icon={<EqualizerOutlined sx={{width:'100px',height:'60px'}}/>}
    iconLabel='Volume ' value={stats.v}/>
    
    </div>
  )
}

export default DailyStats