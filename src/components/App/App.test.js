import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/La Casa de las Flores/i);
  expect(linkElement).toBeInTheDocument();
});
