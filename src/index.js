import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import store from "./state/store"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@mui/material"
import { theme } from "./services/muiTheme"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
)

//Expose store to window obj to access and e2e test redux store inside Cypress
if (window.Cypress) {
  window.store = store
}
