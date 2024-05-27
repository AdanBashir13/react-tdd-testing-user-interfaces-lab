import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
// First Test
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
    // Act
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });

//   Second Test
  test("displays an image of yourself", () => {
    render(<App />);

    const image = screen.getByAltText("My profile pic");

    expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
  });

// Third Test
  test("displays second-level heading with the text `About Me`", () => {
    render(<App />);

    const secondLevelHeading = screen.getByRole("heading", {
      name: /about me/i,
      exact: false,
      level: 2,
    });

    expect(secondLevelHeading).toBeInTheDocument();
  });

//   Fourth Test
  test("displays a paragraph for your biography", () => {
    render(<App />);

    const bio = screen.getByText(/I love moVies/i);

    expect(bio).toBeInTheDocument();
  });

// Fifth Test
  test("displays the correct links", () => {
    render(<App />);

    const githubLink = screen.getByRole("link", {
      name: /github/i,
    });
    const linkedinLink = screen.getByRole("link", {
      name: /linkedin/i,
    });

    expect(githubLink).toHaveAttribute(
      "href",
      expect.stringContaining("https://github.com")
    );

    expect(linkedinLink).toHaveAttribute(
      "href",
      expect.stringContaining("https://linkedin.com")
    );
  });