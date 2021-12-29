import React from 'react';
import { render } from '@testing-library/react';
import LogoWhite from "./LogoWhite";

it ("should render", function(){
  render(<LogoWhite />)
})


it ("should match snapshot", function(){
  const {asFragment} = render(<LogoWhite />)
  expect(asFragment()).toMatchSnapshot()
})