import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cards from './Card';
import UserProf from './index';

test('Cards Main Container', () => {
  render(<Cards />);
  const tex = screen.getByTestId('cards-container');
  expect(tex).toBeInTheDocument();
});

test('Avatar Images of Cards', () => {
  render(<Cards />);
  const tex = screen.getByAltText('avatar');
  expect(tex).toBeInTheDocument();
});

test('Cards Secondary Container', () => {
  render(<Cards />);
  const tex = screen.getByTestId('cards-secondary-container');
  expect(tex).toBeInTheDocument();
});

test('User Profiles', () => {
  render(
    <BrowserRouter>
      <UserProf />
    </BrowserRouter>
  );
  const tex = screen.getByTestId('user-profile-main');
  expect(tex).toBeInTheDocument();
});

test('Nav Bar of User Profiles', () => {
  render(
    <BrowserRouter>
      <UserProf />
    </BrowserRouter>
  );
  const tex = screen.getByTestId('Login-NavBar');
  expect(tex).toBeInTheDocument();
});

test('Secondary Container -User Profiles-', () => {
  render(
    <BrowserRouter>
      <UserProf />
    </BrowserRouter>
  );
  const tex = screen.getByTestId('user-secondary-container');
  expect(tex).toBeInTheDocument();
});

test('Username -User Profiles-', () => {
  render(
    <BrowserRouter>
      <UserProf />
    </BrowserRouter>
  );
  const tex = screen.getByTestId('username');
  expect(tex).toBeInTheDocument();
});
