import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import SignUp from "./index";

test("Signup", () => {
  render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  );
  const tex = screen.getByTitle('AlreadyMember');
  expect(tex).toBeInTheDocument();
});

test("Signup1", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const tex = screen.getByTestId('signup-main-container');
    expect(tex).toBeInTheDocument();
  });
  
