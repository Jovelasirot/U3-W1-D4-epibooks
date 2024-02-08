import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";

describe("Initial load of web-page", () => {
  test("mount welcome module", () => {
    render(<App />);

    const moduleTitle = screen.getByText(/welcome to epibooks/i);
    expect(moduleTitle).toBeInTheDocument();
  });

  test("mount navbar", () => {
    render(<App />);

    const navBar = screen.getByRole("NavBar");
    expect(navBar).toBeInTheDocument();
  });
});
