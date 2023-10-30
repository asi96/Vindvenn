import React from 'react';
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
    return (
        <div className='weather-container'>
            <div className='weather-top-bar'>
                <input type='text' className='city-search-text' placeholder='Search'></input>
                <div className='city-search-icon'>
                    <img src={search_icon} alt=""></img>
                </div>
            </div>
            <div className='weather-day-report'>
                <div className='weather-report-image'>
                    <img src={cloud_weather_icon}></img>
                </div>
                <div className='weather-report-temperature'>24°C</div>
                <div className='weather-report-location'>Bergen</div>
                <div className='weather-report-data-container'>
                    <div className='data-element'>
                        <img src={humidity_icon}></img>
                        <div className='element-data'>
                            <div className='humidity-percentage'>64%</div>
                            <div className='text'>Humidity</div>
                        </div>
                    </div>
                    <div className='data-element'>
                        <img src={wind_icon}></img>
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