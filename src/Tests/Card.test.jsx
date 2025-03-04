import { describe, it, expect } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { within } from "@testing-library/react";
import App from "../App";

describe("Card Component", () => {
  //TODO: implement cart test here
  it("'+' button increases item quantities", async () => {
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
    });
    const increase = await within(document.querySelector("#item-1")).findByText(
      "+"
    );
    fireEvent.click(increase);
    const input = await within(
      document.querySelector("#item-1")
    ).findByDisplayValue("1");

    expect(input).toBeInTheDocument();
  });

  it("'-' button decreases item quantities", async () => {
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
    });
    const increase = await within(document.querySelector("#item-1")).findByText(
      "+"
    );
    fireEvent.click(increase);

    const inputAtOne = await within(
      document.querySelector("#item-1")
    ).findByDisplayValue("1");

    expect(inputAtOne).toBeInTheDocument();
    const decrease = await within(document.querySelector("#item-1")).findByText(
      "-"
    );
    fireEvent.click(decrease);

    const inputAtZero = await within(
      document.querySelector("#item-1")
    ).findByDisplayValue("0");

    expect(inputAtZero).toBeInTheDocument();
  });
  it("Items can be added to cart", async () => {
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
    });
    const increase = await within(document.querySelector("#item-1")).findByText(
      "+"
    );
    const addToCart = await within(
      document.querySelector("#item-1")
    ).findByText("Add to Cart");

    fireEvent.click(increase);
    fireEvent.click(addToCart);

    fireEvent.click(screen.getByRole("link", { name: "Checkout" }));

    await waitFor(() => {
      const cartItem = screen.getByRole("heading", {
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      });
      expect(cartItem).toBeInTheDocument();
    });
  });
});
