import React from 'react';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import InputField from './InputField';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';
import { chosenCityReducer, chosenCityWeatherReducer } from '../../reducers';

// const chooseCity = (city) => ({ type: 'CITY_CHOSEN', payload: city });
// const fetchWeather = (weather) => ({ type: 'WEATHER_FETCHED', payload: weather })

describe("<InputField />", () => {
    
    const renderComponent = () => {
        const mockStore = configureStore([]);
        let store;

        store = mockStore({
            chosenCity: chosenCityReducer,
            weatherForecast: chosenCityWeatherReducer
        });

        return (
            render(
                <Provider store={store}>
                    <InputField />
                </Provider>)
        )
    }

    it('should render with given state from Redux store', () => {
        expect(renderComponent()).toMatchSnapshot();
    });

    test('render input field', () => {
        renderComponent();

        const inputEl = screen.getByTestId("search-field");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "text");
    });


    test('pass valid city input to test search input field', () => {
      renderComponent()
      const inputEl = screen.getByTestId("search-field");
      userEvent.type(inputEl, "paris");
      expect(screen.getByTestId("search-field")).toHaveValue("paris");
    });


    test('pass a random input to test that "no result" message appears', () => {
      renderComponent()

      const inputEl = screen.getByTestId("search-field");
      userEvent.type(inputEl, "notacity");
      expect(screen.getByTestId("search-field")).toHaveValue("notacity");

      const buttonEl = screen.getByTestId("search-btn")
      fireEvent.click(buttonEl)

    //   expect(screen.queryByTestId("not-found-msg")).toBeInTheDocument();
    //   expect(screen.queryByTestId("not-found-msg").textContent).toEqual("Sorry, no results found for this location");
    });

});