import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import weather from '../../apis/weather';
import weatherIcons from '../../assets/weatherIcons';
import calculateAverageTemp from '../../utils/averageTemp';
import './CurrentWeather.css'

function CurrentWeather(props) {

    const [currentWeather, setCurrentWeather] = useState(null);

    useEffect(() => {

        const fetchCurrentWeather = async () => {
            try {
                const res = await weather.get(`/${props.chosenCity.woeid}`);
                const data = {
                    min_temp: res.data.consolidated_weather[0].min_temp,
                    max_temp: res.data.consolidated_weather[0].max_temp,
                    weather_state: res.data.consolidated_weather[0].weather_state_name,
                    weather_state_abbr: res.data.consolidated_weather[0].weather_state_abbr,
                    humidity: res.data.consolidated_weather[0].humidity
                }
                setCurrentWeather(data);

            } catch (e) {
                console.log(e);
            }
        }

        if (props.chosenCity) {
            fetchCurrentWeather();
        }

    }, [props.chosenCity]);

    return (
        <div class="ui segment curr-weather-container">
            <div className="curr-weather-h-container">
                <h5 className="curr-weather-h5">Current Weather</h5>
            </div>
            <div className="weather-details-container">
                <div className="left-box">
                    <h4 className="city-name">London</h4>
                    <img className="weather-img" alt="weather-svg" src={weatherIcons(temp.weather_state_abbr)} />
                    <h4 className="weather-state">{temp.weather_state_name}</h4>
                </div>
                <div className="right-box">
                    <h4 className="detail">Min temp: {Math.round(temp.min_temp)}<sup>°</sup></h4>
                    <h4 className="detail">Max temp: {Math.round(temp.max_temp)}<sup>°</sup></h4>
                    <h4 className="detail">Average temp: {calculateAverageTemp(Math.round(temp.min_temp),Math.round(temp.max_temp))}<sup>°</sup> </h4>
                    <h4 className="detail">Humidity: {temp.humidity}%</h4>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { chosenCity: state.chosenCity }
}


const temp = {
    "weather_state_name": "Clear",
    "weather_state_abbr": "c",
    "min_temp": 17.785,
    "max_temp": 28.685000000000002,
    "humidity": 54,

}

export default connect(mapStateToProps)(CurrentWeather);