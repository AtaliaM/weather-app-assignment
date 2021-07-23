import React from 'react';
import { connect } from 'react-redux';
import weatherIcons from '../../assets/weatherIcons';
import calculateAverageTemp from '../../utils/averageTemp';
import returnWeekDay from '../../utils/weekDays';
import './ExtendedForecast.css';

function ExtendedForecast(props) {

    const renderExtendedForecast = () => {
        const nextDays = props.weatherForecast.slice(1)
        return (
            nextDays.map((day) => {
                return (
                    <div className="day" key={day.applicable_date}>
                        <h4 className="detail day-name">{returnWeekDay(day.applicable_date)}</h4>
                        <div className="s-weather-img-container">
                            <img className="s-weather-img" alt="weather-svg" src={weatherIcons(day.weather_state_abbr)}/>
                        </div>
                        <h4 className="weather-state smaller">{day.weather_state_name}</h4>
                        <h4 className="s-detail ">{Math.round(day.min_temp)}<sup>°</sup>/{Math.round(day.max_temp)}<sup>°</sup></h4>
                        <h4 className="s-detail ">Avg temp: {calculateAverageTemp(Math.round(day.min_temp), Math.round(day.max_temp))}<sup>°</sup> </h4>
                        <h4 className="s-detail ">Humidity: {day.humidity}%</h4>
                    </div>
                )
            })
        )
    }

    return (
        <>
        {props.weatherForecast !== null ?
        <div className="ui segment extended-weather-container">
            <div className="extended-weather-h-container">
                <h5 className="extended-weather-h5">Extended Forecast</h5>
            </div>
            <div className="extended-weather-details-container">
                {renderExtendedForecast()}
            </div>
        </div>
        : null}
        </>
    )
}

const mapStateToProps = (state) => {
    return { chosenCity: state.chosenCity, weatherForecast: state.weatherForecast }
}

export default connect(mapStateToProps)(ExtendedForecast);

// const temp = [
//     {
//         "weather_state_name": "Light Rain",
//         "weather_state_abbr": "lr",
//         "applicable_date": "2021-07-24",
//         "min_temp": 15.765,
//         "max_temp": 20.29,
//         "wind_speed": 6.184855278467086,
//         "humidity": 87,
//     },
//     {
//         "weather_state_name": "Heavy Rain",
//         "weather_state_abbr": "hr",
//         "applicable_date": "2021-07-25",
//         "min_temp": 15.68,
//         "max_temp": 20.994999999999997,
//         "humidity": 81,
//     },
//     {
//         "weather_state_name": "Light Rain",
//         "weather_state_abbr": "lr",
//         "applicable_date": "2021-07-26",
//         "min_temp": 16.41,
//         "max_temp": 25.729999999999997,
//         "humidity": 61,
//     }
// ]