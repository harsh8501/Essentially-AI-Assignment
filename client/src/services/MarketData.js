import axios from 'axios';

const API_Key='G2arXWDPMUD9rL5QzhkuD6sDc3D8MbLY'
const URL='https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks'


export const getDate=()=>{
    const currentDate = new Date();

    let month=currentDate.getMonth()+1;
    let year=currentDate.getFullYear();
    let date=currentDate.getDate();
    if(((date-1)<0) ) {
        if(month-1<0){
            month=12;
            year=year-1;
        }
        else{
            month=-1;
        }
        if(month%2===0)
         date=30;
        else
         date=31;
        
    }
    else{
        date=date-1;
    }

    const dayWithZero = (date).toString().padStart(2, '0');
    const monthWithZero = (month).toString().padStart(2, '0');
    const formattedDate = `${year}-${monthWithZero}-${dayWithZero}`;
    return formattedDate
}


export const MarketData=async()=>{
   try{
    const forDate=getDate();
    const date=forDate;
    const res = await axios.get(`${URL}/${date}?adjusted=true&apiKey=${API_Key}`)
    return res;
   }
   catch(err){
    console.log(err);
   }

}

const EXCHANGE_API_KEY='G2arXWDPMUD9rL5QzhkuD6sDc3D8MbLY'
const EXCHANGE_URL=`https://api.polygon.io/v3/reference/exchanges?asset_class=stocks&locale=us&apiKey=${EXCHANGE_API_KEY}`
export const ExchangeData=async()=>{
    try{
     const res = await axios.get(EXCHANGE_URL)
     return res;
    }
    catch(err){
     console.log(err);
    }
 
 }

 const PREVIOUS_API_KEY='G2arXWDPMUD9rL5QzhkuD6sDc3D8MbLY'
 const PREVIOUS_URL=  `https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=${PREVIOUS_API_KEY}`
 export const PreviousStatsData=async(ticker)=>{
     try{
      const res = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=${PREVIOUS_API_KEY}`)
      return res;
     }
     catch(err){
      console.log(err);
     }
  
  }
 
  export const DailyStatData=async(ticker)=>{
    try{
     const date=getDate();
     const res2=await axios.get(`https://api.polygon.io/v1/open-close/${ticker}/${date}?adjusted=true&apiKey=${PREVIOUS_API_KEY}`)
     return res2;
    }
    catch(err){
     console.log(err);
    }
 
 }

// Name
// wizardly_lumiere



// ` https://api.polygon.io/v2/aggs/grouped/
//  locale/us/market/stocks/2023-01-09?adjusted=true&API_Key=G2arXWDPMUD9rL5QzhkuD6sDc3D8MbLY`
