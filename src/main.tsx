import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

/**
 * Application entry point. Hydrates the React app into the `#root` element.
 */
createRoot(document.getElementById("root")!).render(<App />);
