//import apiservice from './apiservice';
import './App.css';
import { useEffect,useState } from 'react';
//import axios from 'axios';

const api = {
  key: "9d23474ef78f20a41c316fde70fb3294",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
const [search, setSearch] = useState("");
const [weather, setWeather] = useState({})

const searchPressed = () => {
  fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
 .then((res) => res.json())
 .then((results)=>{
  setWeather(results)
 });
};
  return (
    <div className="App">
    <header className='app-header'>

      {/* Header*/}
      <h1>Weather App</h1>

      {/*Search Box*/}
      <div>
      <input 
      className='seachinput' 
      type='text'
      placeholder='Search'
      onChange={(e) => setSearch(e.target.value)}
       />

       <button onClick={searchPressed}> Search</button>
      </div>
      {/*Location*/}
      <p> {weather.name} *C</p>

      {/*Temperature*/}
      <p>{weather.main.temp}</p>

      {/*Weather Condition*/}
      <p>{weather.weather[0].main}</p>
      <p>({weather.weather[0].description})</p>

    </header>
    </div>
  );
}

export default App;
