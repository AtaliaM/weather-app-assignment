export const chooseCity = (city) => {
    return {
        type: 'CITY_CHOSEN',
        payload: city
    }
}

export const fetchWeather = (weather) => {
    return {
        type: 'WEATHER_FETCHED',
        payload: weather
    }
}