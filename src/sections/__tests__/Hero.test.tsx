import { render, screen } from "@testing-library/react";
import Hero from "../Hero";

describe("Hero Sections", () => {
  test("renders correctly", () => {
    render(<Hero />);
    const HeroImage = screen.getByAltText(/shoe collection/i);
    expect(HeroImage).toBeInTheDocument();
  });
});
