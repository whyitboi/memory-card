import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { App } from "./App.jsx";
// import { Greeting } from "./Greeting.jsx";
// import { More } from "./test.jsx";
import { Clock } from "./Clock.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Clock />
  </StrictMode>,
);
