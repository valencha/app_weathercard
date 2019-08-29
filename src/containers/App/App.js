import React from 'react';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import {Grid,CssBaseline } from '@material-ui/core';

const days = [
  
  {
    day : 'Wed',
    icon : "http://openweathermap.org/img/wn/02d@2x.png",
    max: "70º",
    min:"60º",
  },
  
  {
    day: "Thu",
    icon : "http://openweathermap.org/img/wn/03d@2x.png",
    max: "60º",
    min:"70º",
  },
  {
    day: "Fri",
    icon :"http://openweathermap.org/img/wn/10d@2x.png",
    max: "50º",
    min:"40º",
  },
  
  {
    day: "Sa",
    icon : "http://openweathermap.org/img/wn/03d@2x.png",
    max: "50º",
    min:"40º",
  },
  
  {
    day: "Sun",
    icon : "http://openweathermap.org/img/wn/01d@2x.png",
    max: "50º",
    min:"40º",
  },
  
  {
    day: "Mon",
    icon : "http://openweathermap.org/img/wn/02d@2x.png",
    max: "60º",
    min:"50º",
  },
  
  {
    day: "Tus",
    icon: "http://openweathermap.org/img/wn/03d@2x.png",
    max:"70º",
    min:"60º",
  },
  {
    day: "Wed",
    icon: "http://openweathermap.org/img/wn/01d@2x.png",
    max: "50º",
    min: "40º",
  }
  
  
];


function App() {
  return (<div>  
    <Grid container spacing = {3}>
    
    {days.map((item) => {
      return  <Grid item md={2}>
      <WeatherCard 
      day={item.day}
      icon= {item.icon}
      min = {item.min}
      max= {item.max}
      />
      </Grid>
    }) }
    
    
    
    
    </Grid>
    <CssBaseline/>
    </div>  );
  }
  
  export default App;
  