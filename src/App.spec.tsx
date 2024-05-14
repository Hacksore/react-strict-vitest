import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App.js";

describe("App", () => {
  it("renders the right thing in the dom", () => {
    render(<App />);

    // TODO: see if 2 renders in developement mode
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
