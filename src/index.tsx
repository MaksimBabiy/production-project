import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "app/styles/index.scss";
import App from "./app/App";
import { ThemeProvider } from "app/providers/ThemeProviders";
import "shared/config/i18n/i18n";
import { ErrorBoundaries } from "app/providers/ErrorBoundaries";
import { Provider } from "react-redux";
import { store } from "app/providers/StoreProvider/config/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundaries>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundaries>
    </BrowserRouter>
  </Provider>
  // <StoreProvider>

  // </StoreProvider>
);
