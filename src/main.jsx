import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// StrictMode was removed because in development it remounts the app once,
// and that rewrite of the page title made the browser tab icon flicker.

createRoot(document.getElementById("root")).render(<App />);
