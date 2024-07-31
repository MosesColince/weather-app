import './App.css';
import { useState } from 'react';
import axios from 'axios';

const api = {
  key: "9d23474ef78f20a41c316fde70fb3294",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const searchPressed = async () => {
    setLoading(true);
    setError("");
    
    try {
      const response = await axios.get(`${api.base}weather`, {
        params: {
          q: search,
          units: 'metric',
          APPID: api.key
        }
      });
      setWeather(response.data);
    } catch (error) {
      setError('Please try again, check spelling');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const weatherIconUrl = weather.weather ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png` : '';

  return (
    <div className="App">
      <header className='app-header'>
        <h1>Weather App</h1>

        <div>
          <input 
            className='searchinput' 
            type='text'
            placeholder='Search'
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {weather.main && (
          <>
            <div>
              <img 
                src={weatherIconUrl} 
                alt={weather.weather[0].description} 
                className='weather-icon'
              />
            </div>
            <p>{weather.name}</p>
            <p>{weather.main.temp} °C</p>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </>
        )}
      </header>
    </div>
  );
}

export default App;

