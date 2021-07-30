import React from 'react';
import {render,screen} from '@testing-library/react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from 'redux';
import reducers from '../../reducers/index'

describe('<App/>', ()=> {

  test('renders Weather App header', () => {
    render(<Provider store={createStore(reducers)}><App/></Provider>);
    const linkElement = screen.getByText(/Weather App/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  it('renderes without crashing', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={createStore(reducers)}><App/></Provider>, div)
    ReactDOM.unmountComponentAtNode(div);
  })
})
