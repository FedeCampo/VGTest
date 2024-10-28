import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import Navbar from "widgets/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
