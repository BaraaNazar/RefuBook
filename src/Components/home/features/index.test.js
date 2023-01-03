import { render, screen } from '@testing-library/react';
import Features from '.';

test('should render All Features inside Features component', () => {
  render(<Features />);

  expect(screen.getByText('Reliability')).toBeInTheDocument();
  expect(screen.getByText('Motivation')).toBeInTheDocument();
  expect(screen.getByText('Efficiency')).toBeInTheDocument();
  expect(screen.getByText('Creativity')).toBeInTheDocument();
});
