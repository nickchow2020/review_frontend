import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import App from "./App"

it ("should render", function(){
  render(
    <App>
      <Home />
    </App>
  )
})


it ("match snapshot", function(){
  const {asFragment} = render(<App><Home /></App>)
  expect(asFragment()).toMatchSnapshot()
})