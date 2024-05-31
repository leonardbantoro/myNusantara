import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Pages/home.css';

const Home = ({ selectedProvince, handleProvinceClick }) => {
  const [isJawaPressed, setIsJawaPressed] = useState(false);
  const [showText, setShowText] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [wikiDescription, setWikiDescription] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);

  const provinces = [
    { name: 'Pulau Jawa', id: 'jawa', d: 'M101.002,68.098l-1.014-3.303l-5.026-0.661l-5.403-0.944l-0.92,2.431l-8.471-0.213l-3.893-2.902l-6.535-0.401l-1.392-0.024l-3.705-0.707l-1.227,3.468l3.516,2.359l0.778,2.195l10.429,1.533l1.793-0.943l6.701,0.802l4.365,1.415l0.543,0.118l11.986-0.377l4.247,1.628l2.383-4.341l-6.229,0.094L101.002,68.098z' },
    { name: 'Pulau Lain', id: 'lain', d: 'M124.786,30.3l1.038-8.14l5.332-0.26l-0.519-2.383l-4.861-3.138l1.133-2.076l-5.12-6.914l-0.236-4.011l-8.376,1.463l-0.637,6.135l-4.695,8.801l-4.53,1.321L99.87,19.66l-4.507,0.707L93.57,22.82l-8.352,0.496l-5.215-4.766l-2.312,6.04l1.321,5.686l5.592,5.285l1.746,9.084l3.681-0.826l9.06,2.407l2.926-2.006l6.134,1.581l1.888,3.846l7.055-3.35l2.925-6.819l-1.51-3.445L124.786,30.3z M160.177,79.494l3.634,0.566l3.421-3.751l-0.802-2.855L160.177,79.494z M140.924,70.458l-1.463,3.186l10.051-0.236l5.427-1.628l0.873-2.548l-3.657,2.76L140.924,70.458z M164.306,19.163l-2.052-2.005l-3.776,3.114l-8.966-0.566l-7.101-1.369l-1.676,3.162l-2.737,0.377l-2.241,8.612l-0.944,6.159l-2.926,4.483l1.109,4.199l3.044-0.566l0.92,4.412l-1.25,5.663l2.524,1.722l2.761-1.109l0.448-4.766l-0.637-7.597l3.728-1.817l-0.897,3.445l3.634,3.586l5.804,0.661l-1.651-6.229l-4.672-6.158l4.389-3.28l2.265-3.209h-7.15l-2.17,3.162l-5.545-3.846l1.227-6.205l5.214-0.189l8.943-0.59l2.666,0.779l4.719-0.732L164.306,19.163z M185.282,14.658l-7.22,2.312l4.152,10.547l0.795-0.636l-1.62-5.947l3.94-3.492L185.282,14.658z M175.679,45.188l1.817-3.705l-6.088,0.496l-0.896,2.581L175.679,45.188z M184.463,40.77l-0.283,2.761l7.205-0.526l7.204,1.475l-1.628-4.129l-5.577-0.813L184.463,40.77z M122.945,72.298l1.038,3.161l9.249-1.981l1.133-2.69l-6.205,0.472L122.945,72.298z M257.74,35.421l-6.771-1.18l-12.6-4.837l-8.069,4.625l-5.238,6.818l-2.831-0.118l-1.911-2.784l-2.855-2.524l0.283-5.946l-1.935-3.516l-3.374,0.165l-4.011-1.887l-8.235,3.02l-1.439,3.586l5.356,0.661l5.073,6.654l0.118,4.978l3.138,2.029l1.746-2.831l7.527,3.775l6.417,1.392l10.264,3.988l6.63,9.367l1.557,4.506l-1.242,2.728l-0.457-3.86l-4.601,1.368l-2.359,4.554l4.742,0.023l2.582-1.879l-0.222,0.487l6.512-0.047l6.111,6.182L258,58.118L257.74,35.421z M63.888,47.288l-2.69-4.46l-4.034-0.377l-3.115-6.607l-5.19-1.25l1.462-5.427l-7.196-2.524l-2.053-3.233l-3.846-1.557l-2.099-2.69l-4.224-1.652l-3.232-3.303l-8.14-4.624L14.859,3.26L7.238,3.285L2,1.939l1.392,3.988l5.757,5.403l2.572,0.708l5.073,7.573l2.005,0.425l3.775,3.445l2.525,6.913l3.374,1.392l7.786,12.953l14.888,12.293l3.964,3.681l8.069,0.472l-0.306-8.99L63.888,47.288z M114.49,74.372l-4.333-2.917l6.083-0.667l1.417,2.167L114.49,74.372z' },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const fetchWikiDescription = async () => {
      try {
        const response = await axios.get(
          'https://en.wikipedia.org/api/rest_v1/page/summary/Yogyakarta'
        );
        setWikiDescription(response.data.extract);
      } catch (error) {
        console.error('Error fetching Wikipedia data:', error);
      }
    };

    const fetchWeatherInfo = async () => {
      try {
        const apiKey = 'c56b4c5991bc92284efd4fa16e945677'; // Ensure this is your valid API Key
        const lat = '-7.795580';
        const lon = '110.369492';
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );
        setWeatherInfo(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    if (sidebarOpen) {
      fetchWikiDescription();
      fetchWeatherInfo();
    }
  }, [sidebarOpen]);

  return (
    <div className="map-container">
      <svg
        fill="#000000"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="auto"
        viewBox="0 0 300 150"
        enableBackground="new 0 0 300 150"
        xmlSpace="preserve"
      >
        <g transform="translate(20, 29)">
          {provinces.map((province, index) => (
            <Link to={province.id === 'jawa' ? '/yogya' : ''} key={province.id}>
              <path
                id={province.id}
                fill={province.id === 'jawa' ? (province.clickable && province.name === selectedProvince ? '#56A232' : '#7d7777') : '#7d7777'}
                d={province.d}
                className={province.id === 'jawa' ? 'hoverable' : ''}
                style={{ cursor: 'pointer' }}
                onMouseDown={() => province.id === 'jawa' && setIsJawaPressed(true)}
                onMouseUp={() => province.id === 'jawa' && setIsJawaPressed(false)}
                onTouchStart={() => province.id === 'jawa' && setIsJawaPressed(true)}
                onTouchEnd={() => province.id === 'jawa' && setIsJawaPressed(false)}
                onMouseEnter={() => setShowText(true)}
                onMouseLeave={() => setShowText(false)}
                onClick={() => handleProvinceClick(province.name)}
              />
              {province.id === 'jawa' && showText && (
                <>
                  <line x1="90" y1="70" x2="90" y2="60" stroke="#DE1C20" strokeWidth="1" />
                  <rect x="70" y="50" rx="5" ry="5" width="50" height="10" fill="#DE1C20" />
                  <text
                    id="yogyakarta-text"
                    x="95"
                    y="55.5"
                    fill="white"
                    fontSize="6"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    className="fade-in"
                  >
                    Yogyakarta
                  </text>
                </>
              )}
            </Link>
          ))}
        </g>
      </svg>

            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
              <div className="sidebar-content">
                <h2>Yogyakarta</h2>
                <img src='yogyakarta.jpg'></img>
                <p>{wikiDescription || 'Loading...'}</p>
                {weatherInfo ? (
        <div className="weather-info">
          <h3>Current Weather</h3>
          <p>Temperature: {weatherInfo.main.temp}°C 
            {weatherInfo.main.temp >= 20 && weatherInfo.main.temp <= 25 && ' ❄️'}
            {weatherInfo.main.temp > 25 && weatherInfo.main.temp <= 30 && ' 😐'}
            {weatherInfo.main.temp > 30 && weatherInfo.main.temp <= 35 && ' 🔥'}
          </p>
          <p>Weather: {weatherInfo.weather[0].description}</p>
        </div>
          ) : (
            <p>Loading weather information...</p>
          )}
        </div>
      </div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        &#x2192;
      </button>
    </div>
  );
};


export default Home;
