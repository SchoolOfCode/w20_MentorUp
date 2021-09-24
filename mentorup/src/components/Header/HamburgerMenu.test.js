import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import App from "../../App";

test("expect hamburger menu to be rendered", async () => {
  const { getByTestId, getByAltText, getByText } = render(<App />);
  fireEvent.click(getByTestId("icon-button"));
  await waitFor(() => {
    getByAltText("mentorup logo");
  });
  expect(getByText("Login/Sign-up")).toBeVisible();
});
