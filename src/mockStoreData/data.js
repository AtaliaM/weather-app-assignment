import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

export const renderComponentWithMockStore = (TestedComponent, initialState) => {
    const mockStore = configureStore([]);
    let store;
    store = mockStore(
        initialState
    );

    return (
        render(
            <Provider store={store}>
                <TestedComponent/>
            </Provider>)
    )
}

export const chosenCityMock = {
    "title": "London",
    "location_type": "City",
    "woeid": 44418,
    "latt_long": "51.506321,-0.12714"
  }

export const weatherForecastMock = [
    {
        "id": 4679912280555520,
        "weather_state_name": "Light Rain",
        "weather_state_abbr": "lr",
        "created": "2021-07-30T12:56:01.793318Z",
        "min_temp": 14.565000000000001,
        "max_temp": 20.53,
        "humidity": 73,
    },
    {
        "id": 4509795504619520,
        "weather_state_name": "Heavy Rain",
        "weather_state_abbr": "hr",
        "applicable_date": "2021-07-31",
        "min_temp": 13.435,
        "max_temp": 21.7,
        "humidity": 63,
    },
    {
        "id": 5635695411462144,
        "weather_state_name": "Showers",
        "weather_state_abbr": "s",
        "applicable_date": "2021-08-01",
        "min_temp": 13.92,
        "max_temp": 19.814999999999998,
        "humidity": 68,
    },
    {
        "id": 5482351455895552,
        "weather_state_name": "Light Rain",
        "weather_state_abbr": "lr",
        "applicable_date": "2021-08-02",
        "min_temp": 13.665,
        "max_temp": 19.89,
        "humidity": 58,
    }]

