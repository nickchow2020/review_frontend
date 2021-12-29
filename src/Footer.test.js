import React from 'react';
import { render } from '@testing-library/react';
import Footer from "./Footer";

it ("should render", function(){

  render(<Footer />)
})

it ("should match snapshot", function(){
  const {asFragment} = render(<Footer />)
  expect(asFragment()).toMatchSnapshot()
})