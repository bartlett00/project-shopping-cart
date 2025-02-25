import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

/*
  navigation "buttons" work
  cart displays cartCount
  company logo/name renders
*/

describe("Nav component", () => {
  it("remains rendered when page changes", async () => {
    render(<App />);

    const link = screen.getAllByRole("link", { name: "Store" });

    fireEvent.click(link[0]);

    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });
});
describe("Links", () => {
  it("Navigates to Store page on appropriate link click", async () => {
    render(<App />);

    const link = screen.getAllByRole("link", { name: "Store" });

    fireEvent.click(link[0]);

    const header = screen.getByText("Find something you'll love.");
    expect(header).toBeInTheDocument();
  });
  it("Navigates to Homepage on appropriate link click", () => {
    render(<App />);

    const link = screen.getAllByRole("link", { name: "Homepage" });

    fireEvent.click(link[0]);

    const mainHeader = screen.getByText("Where variety meets quality.");
    const storeBanner = screen.getByText("Join the fun.");

    expect(mainHeader).toBeInTheDocument();
    expect(storeBanner).toBeInTheDocument();
  });

  it("Navigates to Cart on appropriate link click", () => {
    render(<App />);

    const link = screen.getAllByRole("link", { name: "Cart" });

    fireEvent.click(link[0]);

    const mainHeader = screen.getByText("Your Cart");

    expect(mainHeader).toBeInTheDocument();
  });
});

describe("Footer component", () => {
  it("remains rendered when page changes", async () => {
    render(<App />);

    const link = screen.getAllByRole("link", { name: "Cart" });

    fireEvent.click(link[0]);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
});
