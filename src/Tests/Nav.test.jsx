import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { within } from "@testing-library/react";
import App from "../App";

/*
  navigation "buttons" work
  cart displays cartCount
  company logo/name renders
*/

//TODO: change 'getAllByRole' calls to 'getByRole'
describe("Nav component", () => {
  it("remains rendered when page changes", async () => {
    render(<App />);

    const nav = screen.getByRole("navigation");
    const link = within(nav).getByRole("link", { name: "Store" });

    fireEvent.click(link);

    expect(nav).toBeInTheDocument();
  });
});
describe("Nav Links", () => {
  it("Navigates to Store page on appropriate link click", async () => {
    render(<App />);
    const nav = screen.getByRole("navigation");
    const link = within(nav).getByRole("link", { name: "Store" });

    fireEvent.click(link);

    const header = screen.getByText("Find something you'll love.");
    expect(header).toBeInTheDocument();
  });

  it("Navigates to Homepage on appropriate link click", () => {
    render(<App />);

    const nav = screen.getByRole("navigation");
    const link = within(nav).getByRole("link", { name: "Homepage" });

    fireEvent.click(link);

    const mainHeader = screen.getByText("Where variety meets quality.");
    const storeBanner = screen.getByText("Join the fun.");

    expect(mainHeader).toBeInTheDocument();
    expect(storeBanner).toBeInTheDocument();
  });

  it("Navigates to Cart on appropriate link click", () => {
    render(<App />);

    const nav = screen.getByRole("navigation");
    const link = within(nav).getByRole("link", { name: "Cart 0" });

    fireEvent.click(link);

    const mainHeader = screen.getByText("Your Cart");

    expect(mainHeader).toBeInTheDocument();
  });
});
