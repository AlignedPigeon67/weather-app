import { useState, useEffect } from 'react';
import './App.css';
import InfoBox from './components/InfoBox/InfoBox';
import SearchBar from './components/SearchBar/SearchBar';
import UnitToggle from './components/UnitToggle/UnitToggle';

const api = {
  base: 'https://api.openweathermap.org/data/2.5/',
  key: process.env.REACT_APP_API_KEY,
};

function App() {
  const [weatherData, setWeatherData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('manchester');
  const [isMetric, setIsMetric] = useState(true);

  useEffect(() => {
    fetch(
      `${api.base}weather?q=${query}&appid=${api.key}&units=${
        isMetric ? 'metric' : 'imperial'
      }`
    )
      .then(res => res.json())
      .then(
        data => {
          setWeatherData(data);
          setIsLoaded(true);
          console.log(data);
        },
        err => {
          setError(err);
          setIsLoaded(true);
        }
      );
  }, [query, isMetric]);

  const handleInput = e => {
    e.preventDefault();
    setQuery(input);
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleUnitToggle = () => {
    setIsMetric(!isMetric);
    console.log(isMetric);
  };

  const background = weatherData?.main.temp > 18 ? 'warm-bg' : 'cold-bg';

  return (
    <div className={`app ${background}`}>
      <InfoBox data={weatherData} isLoaded={isLoaded} isMetric={isMetric} />
      <span>
        <UnitToggle isMetric={isMetric} handleUnitToggle={handleUnitToggle} />
        <SearchBar change={handleChange} input={handleInput} />
      </span>
    </div>
  );
}

export default App;
