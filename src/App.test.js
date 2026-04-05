import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./components/Particle", () => () => <div data-testid="particle" />);

beforeAll(() => {
  window.scrollTo = jest.fn();
});

test("renders portfolio hero content", () => {
  render(<App />);
  const linkElement = screen.getByText(/view resume/i);
  expect(linkElement).toBeTruthy();
});
