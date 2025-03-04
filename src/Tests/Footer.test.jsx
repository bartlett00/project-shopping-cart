import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { within } from "@testing-library/react";
import App from "../App";

describe("Footer component", () => {
  it("remains rendered when page changes", async () => {
    render(<App />);

    const footer = screen.getByRole("contentinfo");
    const link = within(footer).getByRole("link", { name: "Cart" });

    fireEvent.click(link);

    expect(footer).toBeInTheDocument();
  });
});

describe("Footer links", () => {
  it("Navigates to Store page on appropriate link click", async () => {
    render(<App />);

    const footer = screen.getByRole("contentinfo");
    const link = within(footer).getByRole("link", { name: "Store" });

    fireEvent.click(link);

    const header = screen.getByText("Find something you'll love.");
    expect(header).toBeInTheDocument();
  });

  it("Navigates to the Homepage on appropriate link click", async () => {
    render(<App />);

    const footer = screen.getByRole("contentinfo");
    const link = within(footer).getByRole("link", { name: "Homepage" });

    fireEvent.click(link);

    const mainHeader = screen.getByText("Where variety meets quality.");
    const storeBanner = screen.getByText("Join the fun.");

    expect(mainHeader).toBeInTheDocument();
    expect(storeBanner).toBeInTheDocument();
  });

  it("Navigates to the Cart on appropriate link click", async () => {
    render(<App />);

    const footer = screen.getByRole("contentinfo");
    const link = within(footer).getByRole("link", { name: "Cart" });

    fireEvent.click(link);

    const mainHeader = screen.getByText("Your Cart");
    expect(mainHeader).toBeInTheDocument();
  });
});
