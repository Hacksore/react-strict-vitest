import { describe, it, expect } from "vitest";
import { render, screen, configure } from "@testing-library/react";

import App from "./App.js";
import React from "react";

describe("App", () => {
  it("using the RTL configure way", () => {
    configure({ reactStrictMode: true });
    render(<App />);

    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("using the react component to wrap it", () => {
    configure({ reactStrictMode: false });
    render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );

    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
