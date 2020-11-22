import React from "react";
import ArticleImage from "./ArticleImage";
import { fireEvent } from "@testing-library/react";

describe("ArticleListItem tests", () => {
  it("renders correctly", () => {
    const title =
      "ArticleListItem.jsx:6 The Statue of Liberty's torch heads to new museum";
    const url =
      "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg";

    const { container } = render(<ArticleImage url={url} title={title} />);

    expect(container).toMatchSnapshot();
  });
});
