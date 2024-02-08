import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
import CommentArea from "../components/CommentArea";
import fantasy from "../data/fantasy.json";

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

  test("verify if comment area mounts correctly", () => {
    render(<CommentArea />);
  });

  it("verify if numbers of book cards is equal to json books", () => {
    render(<App />);
    const bookJson = fantasy;
    const bookCards = screen.getAllByTestId("card");
    expect(bookCards).toHaveLength(bookJson.length);
  });

  //   test("commentlist is not mounted", () => {
  //     render(<App />);
  //     const commentlist = screen.queryAllByTestId("commentlist");

  //     expect(commentlist).not.toBeInTheDocument();
  //   });
});
