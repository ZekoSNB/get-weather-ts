import React from 'react';
import { WeatherData } from '../API';

// Define the props interface
interface WeatherProps extends WeatherData {}

function Weather({ feels_like, humidity, pressure, temp, weather, icon }: WeatherProps) {
    const icon_url = `https://openweathermap.org/img/wn/${icon}@2x.png`
  return (
    <div className="Todo">
      <p>Feels like: {feels_like}</p>
      <p>Humidity: {humidity}</p>
      <p>Pressure: {pressure}</p>
      <p>Temperature: {temp}</p>
      <p className='weather-icon-wrap'>Weather: {weather} {icon !== undefined ? <img src={icon_url} className='icon-img' alt="Weather icon"/> : null}</p>
    </div>
  );
}

export default Weather;