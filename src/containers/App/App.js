import React from 'react';
import ReactDOM from 'react-dom';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import {Grid,CssBaseline,Button, Modal} from '@material-ui/core';
import moment from 'moment';

import 'moment/locale/es';
import { element } from 'prop-types';

moment.locale('es');


function App() {
  const [days, setDays] = React.useState([]);
  
  const handleGetWeather= ()=>{
    console.log('get weather');
    var promise = fetch(' http://api.openweathermap.org/data/2.5/forecast?q=Cali,co&APPID=905301d7de1425eb8fd9571e4dff0b11&lang=es');
    promise.then((info)=>{
      return info.json();
    }).then((info)=>{
      
      var list = info.list.filter((elem, index)=>{
        return index %8 ===0;
        
      }); 
      
      
      
      list = list.map((elem, index,array) =>{
        var city =info.city.name;
        var country =info.city.country;
        

        return {
          day : moment.unix(elem.dt).format('ddd'),
          modalDay : moment.unix(elem.dt).format('dddd'),
          modalCountry : country,
          modalCity : city,
          modalMin:  Math.round(elem.main.temp_min - 273.15 )+'º',
          modalMax:    Math.round(elem.main.temp_max - 273.15 )+'º',
          modalSpeed: elem.wind.speed,
          modalSeaLevel : elem.main.sea_level,
          modalPressure : elem.main.pressure,
          modalDeg : elem.wind.deg,
          modalHumidity : elem.main.humidity,
          modalGrndLevel : elem.main.grnd_level,
          modalDescription :elem.weather[0].description,
          icon: `http://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`,
          min:  Math.round(elem.main.temp_min - 273.15 )+'º',
          max:  Math.round(elem.main.temp_max - 273.15 )+'º',
        };
        
        
      }); 
      
      setDays(list);
      
      console.log(days);
    });
    
  }
  
  
  return (<div>  
    <Button onClick={handleGetWeather} variant= "contained" color= "primary">
    Get weather info
    </Button>
    
    <Grid container spacing = {3}>
     
    
    {days && days.map((item) => {
   
      return  <Grid item md={2} key={item.day}  >
      <WeatherCard 
      day={item.day}
      dayI={item.dayI}
      icon= {item.icon}
      min = {item.min}
      max= {item.max}
      modalDay={item.modalDay}
      modalCountry = {item.modalCountry}
      modalCity= {item.modalCity}
      modalMin = {item.modalMin}
      modalMax = {item.modalMax}
      modalSpeed = {item.modalSpeed}
      modalSeaLevel = {item.modalSeaLevel}
      modalPressure = {item.modalPressure}
      modalDeg = {item.modalDeg}
      modalHumidity = {item.modalHumidity}
      modalGrndLevel ={item.modalGrndLevel}
      modalDescription = {item.modalDescription}
      />
      
      
      </Grid>
    }) }
    
    </Grid>
    <CssBaseline/>
    </div>  );
  }
  
  
  export default App;
  