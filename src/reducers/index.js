import { combineReducers } from "redux";

const citiesReducer = () => {
    //logic for the cities dataset
    return (
        [
            "title1",
            "title2"
        ]
    )
}


const chosenCityReducer = (chosenCity = null, action) => {
    if(action.type === 'CITY_CHOSEN') {
        return action.payload;
    }

    return chosenCity
}

export default combineReducers({
    cities: citiesReducer,
    chosenCity: chosenCityReducer
})