import React from 'react';
import { connect } from 'react-redux';
import returnWeatherIcon from '../../assets/weatherIcons';
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
                            <img className="s-weather-img" alt="weather-svg" src={returnWeatherIcon(day.weather_state_abbr)}/>
                        </div>
                        <h4 className="weather-state smaller">{day.weather_state_name}</h4>
                        <h4 className="s-detail ">{Math.round(day.min_temp)}<sup>°</sup>/{Math.round(day.max_temp)}<sup>°</sup></h4>
                        <h4 className={`s-detail ${calculateAverageTemp(Math.round(props.weatherForecast[0].min_temp),Math.round(props.weatherForecast[0].max_temp)) > 23? 'orange' : 'blue'}`}>
                        Avg temp: {calculateAverageTemp(Math.round(day.min_temp), Math.round(day.max_temp))}<sup>°</sup> </h4>
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