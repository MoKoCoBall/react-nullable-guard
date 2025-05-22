import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NullableGuard } from "../src/NullableGuard";
import React from "react";

describe("NullableGuard", () => {
  it("renders fallback when value is null", () => {
    render(
      <NullableGuard value={null} fallback={<p>Fallback</p>}>
        {(v) => <p>{v}</p>}
      </NullableGuard>,
    );
    expect(screen.getByText("Fallback")).toBeInTheDocument();
  });

  it("renders children when value is present", () => {
    render(<NullableGuard value="World">{(v) => <p>{v}</p>}</NullableGuard>);
    expect(screen.getByText("World")).toBeInTheDocument();
  });
});
