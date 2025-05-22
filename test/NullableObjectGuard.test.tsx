import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NullableObjectGuard } from "../src/NullableObjectGuard";
import React from "react";

describe("NullableObjectGuard", () => {
  it("renders fallback when object is null", () => {
    render(
      <NullableObjectGuard object={null} fallback={<p>No Object</p>}>
        {(obj) => <p>{obj.name}</p>}
      </NullableObjectGuard>,
    );
    expect(screen.getByText("No Object")).toBeInTheDocument();
  });

  it("renders children when object is defined", () => {
    const user = { name: "Alice", age: 30 };
    render(
      <NullableObjectGuard object={user}>
        {(obj) => <p>{obj.name}</p>}
      </NullableObjectGuard>,
    );
    expect(screen.getByText("Alice")).toBeInTheDocument();
  });
});
