import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import { loadState, saveState } from "./localStorage";
import reducers from "./redux/reducers";

const persistedStore = loadState();
const store = createStore(reducers, persistedStore);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
