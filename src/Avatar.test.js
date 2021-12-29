import React from 'react';
import { render } from '@testing-library/react';
import Avatar from './Avatar';

it("should render", function(){
  render(<Avatar />)
})

it("match snapshot", function(){
  const {asFragment} = render(<Avatar />)

  expect(asFragment()).toMatchSnapshot()
})