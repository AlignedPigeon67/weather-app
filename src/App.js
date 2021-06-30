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
  const [query, setQuery] = useState('edinburgh');
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

  const handleChange = e => setInput(e.target.value);

  const handleUnitToggle = () => setIsMetric(!isMetric);

  const tempLimit = isMetric ? 15 : 59;

  const background = weatherData?.main.temp > tempLimit ? 'warm-bg' : 'cold-bg';

  return (
    <div className={`app ${background}`}>
      <InfoBox data={weatherData} isLoaded={isLoaded} isMetric={isMetric} />
      <span className="inputContainer">
        <UnitToggle isMetric={isMetric} handleUnitToggle={handleUnitToggle} />
        <SearchBar change={handleChange} input={handleInput} />
      </span>
    </div>
  );
}

export default App;
