import { describe, it, expect } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { within } from "@testing-library/react";
import App from "../App";

describe("Store component", () => {
  it("Checkout button navigates user to cart", async () => {
    render(<App />);
    const nav = screen.getByRole("navigation");
    const link = within(nav).getByRole("link", { name: "Store" });

    fireEvent.click(link);

    const checkout = screen.getByRole("link", { name: "Checkout" });

    fireEvent.click(checkout);

    const header = screen.getByRole("heading", { name: "Your Cart" });
    expect(header).toBeInTheDocument();
  });

  it("Store items load on the page", async () => {
    render(<App />);
    const nav = screen.getByRole("navigation");
    const link = within(nav).getByRole("link", { name: "Store" });

    fireEvent.click(link);
    await waitFor(() => {
      expect(
        screen.getByText(
          "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        )
      ).toBeInTheDocument();
      expect(
        screen.getByText("DANVOUY Womens T Shirt Casual Cotton Short")
      ).toBeInTheDocument();
    });
  });
});
