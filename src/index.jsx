import "../global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <div>Hello World</div>
  </StrictMode>,
);