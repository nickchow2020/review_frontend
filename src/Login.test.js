import React from 'react';
import { render } from '@testing-library/react';
import Login from "./Login";
import App from './App'


it ("should render", function(){
  render(<App><Login /></App>)
})

it ("should match snapshot", function(){
  const {asFragment} = render(<App><Login /></App>)

  expect(asFragment()).toMatchSnapshot()
})