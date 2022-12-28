import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import LogIn from "./index";

test("Login", () => {
  render(
    <BrowserRouter>
      <LogIn />
    </BrowserRouter>
  );
  const tex = screen.getByText(/Sign in With/i);
  expect(tex).toBeInTheDocument();
});

test("Login1", () => {
    render(
      <BrowserRouter>
        <LogIn />
      </BrowserRouter>
    );
    const tex = screen.getByTestId('login-main-container');
    expect(tex).toBeInTheDocument();
  });
  
