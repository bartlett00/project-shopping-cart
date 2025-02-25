import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Shop link on homepage", () => {
  it("navigates to store page", async () => {
    render(<App />);

    const homepageLink = screen.getAllByRole("link", { name: "Homepage" });

    fireEvent.click(homepageLink[0]);

    const shopLink = screen.getByRole("link", { name: "Shop" });

    fireEvent.click(shopLink);

    const storeHeader = screen.getByText("Find something you'll love.");
    expect(storeHeader).toBeInTheDocument();
  });
});
