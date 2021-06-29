import { useState, useEffect } from 'react';
import './App.css';
import InfoBox from './components/InfoBox/InfoBox';
import SearchBar from './components/SearchBar/SearchBar';

const api = {
  base: 'https://api.openweathermap.org/data/2.5/',
  key: process.env.REACT_APP_API_KEY,
};

function App() {
  const [weatherData, setWeatherData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('manchester');

  useEffect(() => {
    fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
      .then(res => res.json())
      .then(
        data => {
          setWeatherData(data);
          setIsLoaded(true);
        },
        err => {
          setError(err);
          setIsLoaded(true);
        }
      );
  }, [query]);

  return (
    <div className={`app cold-bg`}>
      <InfoBox />
      <SearchBar />
    </div>
  );
}

export default App;
