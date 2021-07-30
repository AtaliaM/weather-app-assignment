// import React from 'react';
import {screen} from '@testing-library/react';
import App from './App';
import {renderComponentWithMockStore, weatherForecastMock, chosenCityMock} from '../../mockStoreData/data';

describe('<App/>', ()=> {

  test('renders Weather App header', () => {
    renderComponentWithMockStore(App, {chosenCity: chosenCityMock, weatherForecast: weatherForecastMock})
    const linkElement = screen.getByText(/Weather App/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  it('renderes without crashing', ()=> {
    renderComponentWithMockStore(App, {chosenCity: chosenCityMock, weatherForecast: weatherForecastMock})
  })
})
