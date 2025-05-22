import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NullableListGuard } from "../src/NullableListGuard";
import React from "react";

describe("NullableListGuard", () => {
  it("renders fallback when list is null", () => {
    render(
      <NullableListGuard list={null} fallback={<p>Empty List</p>}>
        {(list) => (
          <ul>
            {list.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        )}
      </NullableListGuard>,
    );
    expect(screen.getByText("Empty List")).toBeInTheDocument();
  });

  it("renders fallback when list is empty", () => {
    render(
      <NullableListGuard list={[]} fallback={<p>No Items</p>}>
        {(list) => (
          <ul>
            {list.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        )}
      </NullableListGuard>,
    );
    expect(screen.getByText("No Items")).toBeInTheDocument();
  });

  it("renders children when list has items", () => {
    render(
      <NullableListGuard list={["A", "B"]}>
        {(list) => (
          <ul>
            {list.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        )}
      </NullableListGuard>,
    );
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
  });
});
