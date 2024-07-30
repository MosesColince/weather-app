import axios from 'axios';

const API_URL ='https//home.openweathermap.org/v3.1'

const getWeather = () => {
    return axios.get(`${API_URL}/all`);
}

const getWeatherByRegion = (region) => {
  return  axios.get(`${API_URL}/region/${region}`);
}