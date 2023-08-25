import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "app/styles/index.scss";
import App from "./app/App";
import { ThemeProvider } from "app/providers/ThemeProviders";

import "shared/config/i18n/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
