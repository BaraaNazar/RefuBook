import React from 'react';
import { render, screen } from '@testing-library/react';
import Story from './index';

test('Should has heading title', () => {
  render(<Story />);
  const imgElement = screen.getByRole('heading');
  expect(imgElement).toBeInTheDocument();
});
