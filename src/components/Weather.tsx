import React from 'react';
import { WeatherData } from '../API';

// Define the props interface
interface WeatherProps extends WeatherData {}

function Weather({ feels_like, humidity, pressure, temp, weather, icon, city}: WeatherProps) {
    const icon_url = `https://openweathermap.org/img/wn/${icon}@2x.png`
    if (icon === undefined) return (<></>);
    return (
        // Display weather data
        <div className="Todo">
        <p>Temperature: {temp ? Math.round(temp) : null}°C</p>
        <p>Feels like: {feels_like ? Math.round(feels_like) : null}°C</p>
        <p>Humidity: {humidity ? Math.round(humidity) : null}%</p>
        <p>Pressure: {pressure} hPa</p>
        <p className='weather-icon-wrap'>{weather} {icon !== undefined ? <img src={icon_url} className='icon-img' alt="Weather icon"/> : null}</p>
        {city ? <p>Weather in: {city}</p> : null }
        </div>
    );
}

export default Weather;