import React from 'react';
import { render } from '@testing-library/react';
import App from "./App";
import Register from './Register';

it ("should render", function(){
  render(
  <App>
    <Register />
  </App>
  )
})

it ("should match snapshot", function(){
  const {asFragment} = render(<App><Register /></App>)
  expect(asFragment()).toMatchSnapshot()
})
