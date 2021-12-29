import React from 'react';
import { render } from '@testing-library/react';
import Logo from "./Logo";


it ("should render", function(){
  render(<Logo />)
})


it ("should match snapshot", function(){
  const { asFragment } = render(<Logo />)

  expect(asFragment()).toMatchSnapshot()
})
