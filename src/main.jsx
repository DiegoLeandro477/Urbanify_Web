import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/index.css";
import "./styles/fonts.css";
import "./styles/colors.css";
import "./styles/global.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
