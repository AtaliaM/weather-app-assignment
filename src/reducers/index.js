import { combineReducers } from "redux";

const citiesReducer = () => {
    //logic for the cities dataset
}


const chosenCityReducer = (chosenCity = null, action) => {
    if(action.type === 'CITY_CHOSEN') {
        return action.payload;
    }

    return chosenCity
}

export default combineReducers({
    //cities: citiesReducer
    chosenCity: chosenCityReducer
})