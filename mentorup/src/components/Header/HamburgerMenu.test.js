import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import HamburgerMenu from "./HamburgerMenu";
import App from "../../App";

test("expect hamburger menu to be rendered", async () => {
  const { getByTestId, getByText } = render(<App />);
  fireEvent.click(getByTestId("icon-button"));
  await waitFor(() => {
    getByText("Mentor Up");
  });
  expect(getByText("Login/Sign-up")).toBeVisible();
});
