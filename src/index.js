import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AppProviderWithRouter } from "./Context";

ReactDOM.render(
  <BrowserRouter>
    <AppProviderWithRouter>
      <App />
    </AppProviderWithRouter>
  </BrowserRouter>,
  document.getElementById("root")
);
