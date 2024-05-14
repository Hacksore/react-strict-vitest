import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App.js";
import React from "react";

describe("App", () => {
  it("renders the right thing in the dom", () => {
    // NOTE: does strict mode do anything in test?
    render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );

    // TODO: see if 2 renders in development mode
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
