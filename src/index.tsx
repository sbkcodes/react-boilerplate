import React from "react";
import ReactDOM from "react-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/AuthContext";
import reportWebVitals from "./reportWebVitals";
import AppRoutes from "./routes";
import theme from "./styled/theme";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
