import React, { useEffect, useState } from 'react' 

const WeatherTask = () => {

    const [input,setInput]=useState("");
    const [store,setStore]=useState("")
    const [datas,setDatas]=useState(null)
    
    const handleChange=(e)=>{
        setInput(e.target.value);
    }

    const fetchWeather=async(store)=>{
        if(!store)return;
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${store}&appid=408d0bd0bd3ceec90f7582673a941028`;
        try{
        const response=await fetch(url);
        const data = await response.json();
        if(data.cod===200){
            console.log(data);
            setDatas(data)
        }else{
            console.log(data.message);   
        }
        }
        catch(err){
            console.log(err);   
        }
    }

    const handleClick=()=>{
        setStore(input);
        setInput("");
    }

    useEffect(()=>{
        fetchWeather(store);
    },[store]);

  return (
    <div>Weather Forecast
        <div>
            <input placeholder='search for city' onChange={handleChange} value={input} style={{width:"150px",height:"50px",textAlign:"center",borderRadius:"25px"}}/>
            <button onClick={handleClick}>Search</button>
            {
                datas?(<div>
                    <h3>{datas.name}</h3>
                    <h3>Description:{datas.weather?.[0].description}⛅</h3>
                    <h3>{datas.weather.main}</h3>
                    <h3>Temperature:{(datas.main.temp-273.15).toFixed(2)}<sup>o</sup>C🌞</h3>
                    <h3>Humidity:{datas.main.humidity}%🌨️</h3>
                </div>):<p>No data available</p>
            }   
        </div>
    </div>
  )
}

export default WeatherTask