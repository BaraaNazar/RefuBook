import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonial from './index';

test('Should has heading title', () => {
  render(<Testimonial />);
  const headingElement = screen.getByTitle('Header');
  expect(headingElement).toBeInTheDocument();
});
