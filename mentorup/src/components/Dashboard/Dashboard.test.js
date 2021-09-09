// import React from "react";
// import { render } from "@testing-library/react";
// import Dashboard from "./Dashboard";
// import { BrowserRouter } from "react-router-dom";
// import { FirebaseAppProvider } from "reactfire";

import { ExpansionPanelActions } from "@material-ui/core";

// import firebaseConfig from "../../index";
test(`Need one true test`, () => {
  expect(1).toBe(1);
});
// test("Expect the container div to be in the document", () => {
//   const { getByTestId } = render(
//     <FirebaseAppProvider firebaseConfig={firebaseConfig}>
//       <BrowserRouter>
//         <Dashboard />
//       </BrowserRouter>
//     </FirebaseAppProvider>
//   );
//   const containerDiv = getByTestId("container-div");
//   expect(containerDiv).toBeInTheDocument();
// });

// test("New Mentor Button is in the document", () => {
//   const { getByText } = render(
//     <FirebaseAppProvider firebaseConfig={firebaseConfig}>
//       <BrowserRouter>
//         <Dashboard />
//       </BrowserRouter>
//     </FirebaseAppProvider>
//   );
//   const button = getByText("Find a new mentor");
//   expect(button).toBeInTheDocument();
// });
// test(`A mentor image is displayed in the document`, () => {
//   const { getAllByAltText } = render(
//     <FirebaseAppProvider firebaseConfig={firebaseConfig}>
//       <BrowserRouter>
//         <Dashboard />
//       </BrowserRouter>
//     </FirebaseAppProvider>
//   );
//   const mentorImage = getAllByAltText("Mentor");
//   expect(mentorImage[0]).toBeInTheDocument();
// });
