import React from 'react'
import { useState } from 'react';
import handle_weather_request from '../API';
import Weather from './Weather';
import { WeatherData } from '../API';


function Form() {
    const [value, setValue] = useState('');
    const [weather_props, setWeatherProps] = useState<WeatherData>();
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const weather_props = handle_weather_request(value, '4bcad25ef0235a2c44a12fcd064f4a15');
        setWeatherProps(await weather_props);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="TodoForm">
                <input type="text" value={value} onChange={handleInputChange} className='todo-input' />
                <button type='submit' className='todo-btn' >Get Weather</button>
            </form>
            <Weather feels_like={weather_props?.feels_like} humidity={weather_props?.humidity} temp={weather_props?.temp} pressure={weather_props?.pressure}/>
        </>
    )
}

export default Form
