import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "app/styles/index.scss";
import App from "./app/App";
import { ThemeProvider } from "app/providers/ThemeProviders";
import "shared/config/i18n/i18n";
import { ErrorBoundaries } from "app/providers/ErrorBoundaries";
import { StoreProvider } from "app/providers/StoreProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundaries>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundaries>
    </StoreProvider>
  </BrowserRouter>
);
