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
        </div>
    )
}

export default VindvennApp