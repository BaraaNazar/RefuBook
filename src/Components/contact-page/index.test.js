import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contacts from './index';

test('render Button and eeamil input inside contacts component', () => {
  render(
    <BrowserRouter>
      <Contacts />
    </BrowserRouter>
  );

  //   expect(screen.getByText('Send')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Send/i }));
  expect(screen.getByPlaceholderText('hello@gmail.com'));
});
