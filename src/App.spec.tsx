import { describe, it, expect } from "vitest";
import { render, screen, configure } from "@testing-library/react";

// test strict
configure({ reactStrictMode: true });

import App from "./App.js";

describe("App", () => {
  it("renders the right thing in the DOM because strict mode", () => {
    render(<App />);

    // NOTE: see if 2 renders in development mode
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
