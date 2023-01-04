import React from 'react';
import { render, screen } from '@testing-library/react';
import CallToAction from './index';

test('Should has heading title', () => {
  render(<CallToAction />);
  const headingElement = screen.getByRole('img');
  expect(headingElement).toBeInTheDocument();
});
