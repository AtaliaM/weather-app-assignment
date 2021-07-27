import { combineReducers } from "redux";

export const chosenCityReducer = (chosenCity = null, action) => {
    if(action.type === 'CITY_CHOSEN') {
        return action.payload;
    }

    return chosenCity
}

export const chosenCityWeatherReducer = (weather=null, action) => {
    if(action.type === 'WEATHER_FETCHED') {
        return action.payload;
    }
    return weather
}

export default combineReducers({
    chosenCity: chosenCityReducer,
    weatherForecast: chosenCityWeatherReducer
})