import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto";
import { FirebaseAppProvider } from "reactfire";

export const firebaseConfig = {
  apiKey: "AIzaSyAskJ-GQp_WSP1XugdxLFYEdXi1g58xL3s",
  authDomain: "mentorup-f74a4.firebaseapp.com",
  projectId: "mentorup-f74a4",
  storageBucket: "mentorup-f74a4.appspot.com",
  messagingSenderId: "470552212684",
  appId: "1:470552212684:web:87b3d1782e3ac0ed463e69",
  measurementId: "G-VR55NE6RZ7",
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
