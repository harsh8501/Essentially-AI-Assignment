import axios from "axios"
import { getDate } from "./MarketData";
export const getTickerDetails=async(label,date)=>{
    try{
        const g_date=getDate();
        const dt=(date)?date:g_date;
        const url=`https://api.polygon.io/v3/reference/tickers/${label.T}?date=${dt}&apiKey=G2arXWDPMUD9rL5QzhkuD6sDc3D8MbLY`;
        const res= await axios.post('http://localhost:5000/api/fetchStockData',{'url':url});
        return res.data.data;
    }
    catch(err){
        alert('You have exceeded the maximum requests per minute, It can process only 2 requests. Please hard reload server')
    }
}

