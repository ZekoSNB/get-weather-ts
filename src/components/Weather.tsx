import React from 'react';
import { WeatherData } from '../API';

// Define the props interface
interface WeatherProps extends WeatherData {}

function Weather({ feels_like, humidity, pressure, temp }: WeatherProps) {
  return (
    <div className="Todo">
      <p>Feels like: {feels_like}</p>
      <p>Humidity: {humidity}</p>
      <p>Pressure: {pressure}</p>
      <p>Temperature: {temp}</p>
    </div>
  );
}

export default Weather;