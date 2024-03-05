"use client";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Register from "../app/register/page";

describe("Register", () => {
  it("renders a heading", () => {
    render(<Register />);

    const heading = screen.getByRole("heading", { level: 3 });

    expect(heading).toBeInTheDocument();
  });
});
