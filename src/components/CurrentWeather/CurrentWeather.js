import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import weather from '../../apis/weather';
import { fetchWeather } from '../../actions';
import weatherIcons from '../../assets/weatherIcons';
import calculateAverageTemp from '../../utils/averageTemp';
import './CurrentWeather.css'

function CurrentWeather(props) {

    useEffect(() => {
        const fetchCurrentWeather = async () => {
            try {
                const res = await weather.get(`/${props.chosenCity.woeid}`);
                props.fetchWeather(res.data.consolidated_weather.slice(0,4))

            } catch (e) {
                console.log(e);
            }
        }

        if (props.chosenCity) {
            fetchCurrentWeather();
        }

    }, [props.chosenCity]);

    console.log(props)

    return (
        <>
        {props.weatherForecast !== null ?
        <div className="ui segment curr-weather-container">
            <div className="curr-weather-h-container">
                <h5 className="curr-weather-h5">Current Weather</h5>
            </div>
            <div className="weather-details-container">
                <div className="left-box">
                    <h4 className="city-name">{props.chosenCity.title}</h4>
                    <img className="weather-img" alt="weather-svg" src={weatherIcons(props.weatherForecast[0].weather_state_abbr)} />
                    <h4 className="weather-state">{props.weatherForecast[0].weather_state_name}</h4>
                </div>
                <div className="right-box">
                    <h4 className="detail">Min temp: {Math.round(props.weatherForecast[0].min_temp)}<sup>°</sup></h4>
                    <h4 className="detail">Max temp: {Math.round(props.weatherForecast[0].max_temp)}<sup>°</sup></h4>
                    <h4 className="detail">Avg temp: {calculateAverageTemp(Math.round(props.weatherForecast[0].min_temp),Math.round(props.weatherForecast[0].max_temp))}<sup>°</sup> </h4>
                    <h4 className="detail">Humidity: {props.weatherForecast[0].humidity}%</h4>
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

// const temp = {
//     "weather_state_name": "Clear",
//     "weather_state_abbr": "c",
//     "min_temp": 17.785,
//     "max_temp": 28.685000000000002,
//     "humidity": 54,

// }