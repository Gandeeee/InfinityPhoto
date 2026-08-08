import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Force single unified Light Mode
document.documentElement.classList.remove("dark");
document.documentElement.classList.add("light");
localStorage.removeItem("theme");

createRoot(document.getElementById("root")!).render(<App />);
