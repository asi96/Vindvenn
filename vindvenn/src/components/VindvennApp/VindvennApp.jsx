import React, { useState } from 'react';
import './VindvennApp.css';

import clear_weather_icon from '../Assets/clear.png';
import cloud_weather_icon from '../Assets/cloud.png';
import drizzle_weather_icon from '../Assets/drizzle.png';
import rainy_weather_icon from '../Assets/rain.png';
import snowy_weather_icon from '../Assets/snow.png';
import humidity_icon from '../Assets/humidity.png';
import wind_icon from '../Assets/wind.png'
import search_icon from '../Assets/search.png';

const VindvennApp = () => {

    // Retrieve weather api key
    let api_key_openweather = process.env.REACT_APP_API_KEY_OPENWEATHER;

    const [weatherIcon, setWeatherIcon] = useState(cloud_weather_icon);

    // Function when user clicks search button
    const searchWeather = async () => {

        const searchText = document.getElementsByClassName('city-search-text');

        // Check if the search text is empty
        if(isEmptyOrSpaces(searchText[0].value)) {
            return;
        }

        // Fetch the data with API call
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchText[0].value}&units=Metric&appid=${api_key_openweather}`

        let apiResponse = await fetch(apiUrl);
        let convertedData = await apiResponse.json();

        // Update the displayed weather and data
        updateWeatherData(convertedData);
        setWeatherIcon(updateWeatherIcon(convertedData.weather[0].icon));
    }

    function updateWeatherData(convertedData) {

        // Retrieve elements we put the data into
        const humidityElement = document.getElementsByClassName("humidity-percentage");
        const windElement = document.getElementsByClassName("wind-speed");
        const tempElement = document.getElementsByClassName("weather-report-temperature");
        const cityElement = document.getElementsByClassName("weather-report-location");

        // Put the collected data into the elements
        humidityElement[0].innerHTML = convertedData.main.humidity + " %";
        windElement[0].innerHTML = Math.floor(convertedData.wind.speed) + " km/h";
        tempElement[0].innerHTML = Math.floor(convertedData.main.temp) + "°";
        cityElement[0].innerHTML = convertedData.name;
    }

    function updateWeatherIcon(str) {

        switch (str) {
            case "01d" || "01n":
                return clear_weather_icon;
            case "02d" || "02n":
                return cloud_weather_icon;
            case "03d" || "03n":
                return drizzle_weather_icon;
            case "04d" || "04n":
                return drizzle_weather_icon;
            case "09d" || "09n":
                return rainy_weather_icon;
            case "10d" || "10n":
                return rainy_weather_icon;
            case "13d" || "13n":
                return snowy_weather_icon;
            default:
                return clear_weather_icon;
        }
    }

    // Helper function to check empty or whitespace
    function isEmptyOrSpaces(str){
        return str === null || str.match(/^ *$/) !== null;
    }

    return (
        <div className='weather-container'>
            <div className='weather-top-bar'>
                <input type='text' className='city-search-text' placeholder='Search'></input>
                <div className='city-search-icon' onClick={() => searchWeather()}>
                    <img src={search_icon} alt=""></img>
                </div>
            </div>
            <div className='weather-day-report'>
                <div className='weather-report-image'>
                    <img src={weatherIcon} alt=""></img>
                </div>
                <div className='weather-report-temperature'>24°C</div>
                <div className='weather-report-location'>Bergen</div>
                <div className='weather-report-data-container'>
                    <div className='data-element'>
                        <img src={humidity_icon} alt=""></img>
                        <div className='element-data'>
                            <div className='humidity-percentage'>64%</div>
                            <div className='text'>Humidity</div>
                        </div>
                    </div>
                    <div className='data-element'>
                        <img src={wind_icon} alt=""></img>
                        <div className='element-data'>
                            <div className='wind-speed'>18 km/h</div>
                            <div className='text'>Wind Speed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VindvennApp