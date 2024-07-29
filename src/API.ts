type GeoMetadata = {
    lat: number;
    lon: number;
}

export type WeatherData = {
    feels_like: number | undefined;
    humidity: number | undefined;
    pressure: number | undefined;
    temp: number | undefined;
}



async function handle_geolocation_request(city: string, API_key: string): Promise<GeoMetadata[]> {
    const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_key}`;
    const data = await ( await fetch(URL)).json();
    const result_data = data.map((geo: GeoMetadata) => ({
        lat: geo.lat,
        lon: geo.lon
    }))
    return result_data;
}

async function handle_weather_request(city: string,API_key: string): Promise<WeatherData> {
    const data = await handle_geolocation_request(city, API_key);
    const weather_endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${API_key}&units=metric`;
    const weather_data = await (await fetch(weather_endpoint)).json();
    const weather_result: WeatherData = {
        feels_like: weather_data.main.feels_like,
        humidity: weather_data.main.humidity,
        pressure: weather_data.main.pressure,
        temp: weather_data.main.temp
    }
    return weather_result;
}

export default handle_weather_request;