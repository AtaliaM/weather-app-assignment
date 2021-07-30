import React from 'react';
import { Provider } from 'react-redux';
import InputField from './InputField';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
// import TestRenderer from 'react-test-renderer';
import { chosenCityReducer, chosenCityWeatherReducer } from '../../reducers';

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

    it('should render without crashing', () => {
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

    

});