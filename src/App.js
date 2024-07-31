//import apiservice from './apiservice';
import './App.css';
import { useEffect,useState } from 'react';

const api = {

  base: "https://api.openweathermAP.ORG/DATA/2.5/"
};

function App() {
const [search, setSearch] = useState("");

const searchPressed = () => {
  fetch(`${api.base}weather?q`)
}
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
      <p> Thembisa</p>

      {/*Temperature*/}
      <p> 33 *F</p>

      {/*Weather Condition*/}
      <p>Sunny</p>

    </header>
    </div>
  );
}

export default App;
