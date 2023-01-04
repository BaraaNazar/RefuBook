import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './index';

test('Should has img title', () => {
  render(<HeroImage />);
  const imgElement = screen.getByRole('img');
  expect(imgElement).toBeInTheDocument();
});
