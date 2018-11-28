import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

import App from "./components/App";
import "./index.css";

const store = createStore(rootReducer);

const Index = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Index store={store} />, document.getElementById("root"));
