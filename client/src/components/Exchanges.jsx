import { Card, CardContent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { ExchangeData } from '../services/MarketData';

const Exchanges = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await ExchangeData();
        setData(responseData.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  return (
    <div>
      <Typography variant="h4">Exchanges Over Stock Market</Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data
          ? Object.entries(data).map(([exchangeName, exchangeData]) => (
              <Card
                key={exchangeData.mic}
                sx={{
                  margin: '10px',
                  minWidth: '400px',
                  margin: '10px',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="div">
                    {exchangeData.type}
                  </Typography>
                  <Typography variant="h6" component="div">
                    {`${exchangeData.mic}-${exchangeData.name}`}
                  </Typography>
                  <Typography variant="body2">Acronym: {exchangeData.acronym}</Typography>
                  <Typography variant="body2">Location: {exchangeData.locale.toUpperCase()}</Typography>
                  <Typography variant="body2">
                    <a href={exchangeData.url} target="_blank" rel="noreferrer">
                      Click here
                    </a>
                  </Typography>
                </CardContent>
              </Card>
            ))
          : ''}
      </div>
    </div>
  );
};

export default Exchanges;


