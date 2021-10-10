import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store, history } from "./state-mgmt/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
// @ts-ignore
import { ConnectedRouter } from "connected-react-router";
import { AnimatePresence } from "framer-motion";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <AnimatePresence exitBeforeEnter>
          <App />
        </AnimatePresence>
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
