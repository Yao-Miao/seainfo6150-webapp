import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";
import { fireEvent } from "@testing-library/react";

describe("ArticleTextToggleButton tests", () => {
  it("renders Show more button correctly", () => {
    const { container } = render(<ArticleTextToggleButton buttonText="Show more"/>);
    expect(container).toMatchSnapshot();
  });

  it("renders Show less button correctly", () => {
    const { container } = render(<ArticleTextToggleButton buttonText="Show less"/>);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly after Show more button is clicked", () => {
    const { container, getByText } = render(
      <ArticleTextToggleButton buttonText="Show more" />
    );
    const button = getByText("Show more");
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly after Show less button is clicked", () => {
    const { container, getByText } = render(
      <ArticleTextToggleButton buttonText="Show less" />
    );
    const button = getByText("Show less");
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });


});