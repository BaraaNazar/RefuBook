import React from 'react';
import { render, screen } from '@testing-library/react';
import Team from './index';

test('Should has heading title', () => {
  render(<Team />);
  const headingElement = screen.getByTitle('Header');
  expect(headingElement).toBeInTheDocument();
});
