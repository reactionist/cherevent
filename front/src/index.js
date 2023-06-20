import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
import "./calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
