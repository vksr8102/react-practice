import React, { useEffect } from 'react'
  
const Covid = () => {
    const getCovidData=async()=>{
        try {
            const res = await fetch("https://data.covid19india.org/v4/min/data.min.json");
            const actualData = await res.json();
            console.log(actualData.delta[0]);
        } catch (error) {
         console.log(error);   
        }
    }
    useEffect(()=>{
        getCovidData();
    },[]);
  return (
   <>
   <h1>Live </h1>
   <h2>Caronavirus Live Tracker</h2>
   </>
  )
}

export default Covid
