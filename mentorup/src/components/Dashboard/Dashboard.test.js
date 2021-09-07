//#endregion
import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { BrowserRouter } from "react-router-dom";

test("Expect the container div to be in the document", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
  const containerDiv = getByTestId("container-div");
  expect(containerDiv).toBeInTheDocument();
});

test("New Mentor Button is in the document", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
  const button = getByText("Find a new mentor");
  expect(button).toBeInTheDocument();
});
test(`A mentor image is displayed in the document`, () => {
  const { getAllByAltText } = render(
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
  const mentorImage = getAllByAltText("Mentor");
  expect(mentorImage[0]).toBeInTheDocument();
});
