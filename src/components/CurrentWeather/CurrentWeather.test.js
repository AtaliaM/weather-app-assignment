// import React from 'react';
import CurrentWeather from './CurrentWeather';
// import userEvent from '@testing-library/user-event';
// import { render, screen } from '@testing-library/react';
import {renderComponentWithMockStore, weatherForecastMock, chosenCityMock} from '../../mockStoreData/data';

describe("<CurrentWeather />", () => {

    test('render component without crashing', ()=> {
        renderComponentWithMockStore(CurrentWeather, {chosenCity: chosenCityMock, weatherForecast: weatherForecastMock})
    })


})

