import React , {useState} from 'react'
import './DailyStatsIcon.css';
import { Typography } from '@mui/material';

const DailyStatsIcon = ({icon,iconLabel,value}) => {
 
    const [showPopup, setShowPopup] = useState(false);

    const handleMouseEnter = () => {
      setShowPopup(true);
    };
  
    const handleMouseLeave = () => {
      setShowPopup(false);
    };
    
  return (
    <div className="label-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
    style={{width:'8%',display:'flex',flexDirection:'row',width:'30%'}}>
    {icon}
    <Typography variant='h6'>{value}</Typography>
    {showPopup && <div className="popup-message">{iconLabel}</div>}
  </div>
  )
}

export default DailyStatsIcon