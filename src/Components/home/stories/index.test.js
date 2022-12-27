import React from "react";
import { render, screen } from "@testing-library/react";
import LatestStories from "./index";

test("Latest Stories", () => {
  render(<LatestStories />);
  const tex = screen.getByText(/Latest Stories/i);
  expect(tex).toBeInTheDocument();
});

test("Latest Stories1", () => {
    render(<LatestStories />);
    const tex = screen.getByTestId('latest-story-container');
    expect(tex).toBeInTheDocument();
  });
  
