import React, {useState,useEffect} from 'react';
import { connect } from 'react-redux';
import weather from '../../apis/weather';

function CurrentWeather(props) {

    const [currentWeather, setCurrentWeather] = useState(null);

    useEffect(()=> {

        const fetchCurrentWeather = async() => {
            try {
                const res = await weather.get(`/${props.chosenCity.woeid}`);
                const data = {min_temp: res.data.consolidated_weather[0].min_temp,
                    max_temp: res.data.consolidated_weather[0].max_temp,
                    weather_state: res.data.consolidated_weather[0].weather_state_name,
                    weather_state_abbr: res.data.consolidated_weather[0].weather_state_abbr,
                    humidity: res.data.consolidated_weather[0].humidity }
                setCurrentWeather(data);

            } catch(e) {
                console.log(e);
            }
        }

        if(props.chosenCity) {
            fetchCurrentWeather();
        }

    }, [props.chosenCity]);

    console.log(currentWeather)

    return (
        <div></div>
    )
}

const mapStateToProps = (state) => {
    return {chosenCity: state.chosenCity}
}

export default connect(mapStateToProps)(CurrentWeather);