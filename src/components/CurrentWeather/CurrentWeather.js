import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import weather from '../../apis/weather';
import { fetchWeather } from '../../actions';
import returnWeatherIcon from '../../assets/weatherIcons';
import calculateAverageTemp from '../../utils/averageTemp';
import './CurrentWeather.css';

function CurrentWeather({chosenCity,fetchWeather, weatherForecast}) {

    useEffect(() => {
        const fetchCurrentWeather = async () => {
            try {
                const res = await weather.get(`/${chosenCity.woeid}`);
                fetchWeather(res.data.consolidated_weather.slice(0,4))

            } catch (e) {
                console.log(e);
            }
        }

        if (chosenCity!==null) {
            fetchCurrentWeather();
        }
        
    }, [chosenCity,fetchWeather]);


    return (
        <>
        {weatherForecast !== null ?
        <div className="ui segment curr-weather-container">
            <div className="curr-weather-h-container">
                <h5 className="curr-weather-h5">Current Weather</h5>
            </div>
            <div className="weather-details-container">
                <div className="left-box">
                    <h4 className="city-name">{chosenCity.title}</h4>
                    <img className="weather-img" alt="weather-svg" src={returnWeatherIcon(weatherForecast[0].weather_state_abbr)} />
                    <h4 className="weather-state">{weatherForecast[0].weather_state_name}</h4>
                </div>
                <div className="right-box">
                    <h4 className="detail">Min temp: {Math.round(weatherForecast[0].min_temp)}<sup>°</sup></h4>
                    <h4 className="detail">Max temp: {Math.round(weatherForecast[0].max_temp)}<sup>°</sup></h4>
                    <h4 className={`detail ${calculateAverageTemp(Math.round(weatherForecast[0].min_temp),Math.round(weatherForecast[0].max_temp)) > 23? 'orange' : 'blue'}`}>
                    Avg temp: {calculateAverageTemp(Math.round(weatherForecast[0].min_temp),Math.round(weatherForecast[0].max_temp))}<sup>°</sup> </h4>
                    <h4 className="detail">Humidity: {weatherForecast[0].humidity}%</h4>
                </div>
            </div>
        </div>
        : null}
        </>
    )
}

const mapStateToProps = (state) => {
    return { chosenCity: state.chosenCity, weatherForecast: state.weatherForecast }
}

export default connect(mapStateToProps, {
    fetchWeather
})(CurrentWeather);