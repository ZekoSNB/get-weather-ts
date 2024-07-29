import React from 'react'
import { useState } from 'react';
import handle_weather_request from '../API';
import Weather from './Weather';
import { WeatherData } from '../API';



function Form() {
    const [value, setValue] = useState('');
    const [placeholder, setPlaceholder] = useState('Zadaj Mesto');
    const [weather_props, setWeatherProps] = useState<WeatherData>();

    const clearInput = () => {
        setValue('');
        setPlaceholder('Zadaj Mesto');
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        setPlaceholder(event.target.value);
    }
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const weather_props = handle_weather_request(value, '4bcad25ef0235a2c44a12fcd064f4a15', clearInput);
        setWeatherProps(await weather_props);
    }

    return (
        <>  
            <div className="TodoFormWrapper">
                <form onSubmit={handleSubmit} className='TodoForm'>
                    <input type="text" placeholder={placeholder} value={value} onChange={handleInputChange} className='todo-input' />
                    <button type='submit' className='todo-btn' >Get Weather</button>
                </form>
                <button onClick={clearInput} className='todo-btn' style={{width: '100%', marginBottom: '1rem', marginTop: '0.1rem'}} >Clear Input</button>
            </div>
            <Weather icon={weather_props?.icon} weather={weather_props?.weather} feels_like={weather_props?.feels_like} humidity={weather_props?.humidity} temp={weather_props?.temp} pressure={weather_props?.pressure}/>
        </>
    )
}

export default Form
