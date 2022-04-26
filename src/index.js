import React from "react";
import "./index.css";
import App from "./components/App/App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// React 18

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
