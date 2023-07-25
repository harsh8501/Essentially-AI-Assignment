import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';
import {SearchOutlined} from '@mui/icons-material'
import './Table.css';

const DataTable = ({AllTickerData,setTicker}) => {
  
    if(!AllTickerData?.results)
     return("Loading!!!!")

    const entries = Object.entries(AllTickerData?.results);
    const first50Stocks = entries?.slice(0, 50);

  return (
    <div style={{ height: '300px', overflowY: 'scroll' }}>
    {first50Stocks?
      <Table>
      <TableHead >
        <TableRow sx={{backgroundColor:'#77889'}}>
         <TableCell >Ticker</TableCell>
          <TableCell>Open Price</TableCell>
          <TableCell>Close Price</TableCell>
          <TableCell>Lowest Price</TableCell>
          <TableCell>Highest Price</TableCell>
          <TableCell>Transactions</TableCell>
          <TableCell>Volume</TableCell>
          <TableCell>Now Further</TableCell>
        </TableRow>
      </TableHead>
      
      <TableBody>
      { first50Stocks &&(first50Stocks?.map(([key,Element])=>(
          
            <TableRow key={key}>
            <TableCell>{Element.T}</TableCell>
                <TableCell>{Element.o}</TableCell>
                <TableCell>{Element.c}</TableCell>
                <TableCell>{Element.l}</TableCell>
                <TableCell>{Element.h}</TableCell>
                <TableCell>{Element.t}</TableCell>
                <TableCell>{Element.v}</TableCell>
                <TableCell><Button sx={{
                    borderRadius:'15px'
                }}
                onClick={(e)=>setTicker(Element)}>
                <SearchOutlined/></Button></TableCell>
            </TableRow>
        ))
        )}  
     </TableBody>
     
    </Table>:"No Log Data for Tickers!!!!"}
    </div>
  );
};

export default DataTable;

