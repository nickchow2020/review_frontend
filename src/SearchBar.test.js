import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from "./SearchBar";
import App from "./App"

it ("should render", function(){
  render(<App><SearchBar /></App>)
})

it ("should match snapshot", function(){
  const {asFragment} = render(<App><SearchBar /></App>)
  expect(asFragment()).toMatchSnapshot()
})