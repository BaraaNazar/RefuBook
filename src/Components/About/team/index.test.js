import React from 'react';
import { render, screen } from '@testing-library/react';
import Employee from './Employee';

test('Should has headers', () => {
  render(<Employee />);
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toBeInTheDocument();
});
