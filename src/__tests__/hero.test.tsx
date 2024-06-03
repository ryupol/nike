import { render } from "@testing-library/react";
import Hero from "../sections/Hero";

test("Renders the main page", () => {
  render(<Hero />)
  expect(true).toBeTruthy()
})