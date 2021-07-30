// import React from 'react';
import InputField from './InputField';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
// import TestRenderer from 'react-test-renderer';
import {renderComponentWithMockStore} from '../../mockStoreData/data';

describe("<InputField />", () => {

    it('should render without crashing', () => {
        expect(renderComponentWithMockStore(InputField, {chosenCity: null, weatherForecast: null})).toMatchSnapshot();
    });

    test('render input field', () => {
        renderComponentWithMockStore(InputField, {chosenCity: null, weatherForecast: null});
        const inputEl = screen.getByTestId("search-field");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "text");
    });

    test('pass valid city input to test search input field', () => {
      renderComponentWithMockStore(InputField, {})
      const inputEl = screen.getByTestId("search-field");
      userEvent.type(inputEl, "paris");
      expect(screen.getByTestId("search-field")).toHaveValue("paris");
    });

    

});