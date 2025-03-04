import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Cart component", () => {
  it("psuedo Check out button renders", async () => {
    render(<App />);

    fireEvent.click(screen.getByRole("link", { name: "Cart" }));

    expect(screen.getByText("Check out")).toBeInTheDocument();
  });

  it("psuedo check out button can be clicked", async () => {
    render(<App />);
    window.confirm = vi.fn(() => true);
    fireEvent.click(screen.getByRole("link", { name: "Cart" }));
    fireEvent.click(screen.getByText("Check out"));
    expect(window.confirm).toBeCalled();
  });
});
