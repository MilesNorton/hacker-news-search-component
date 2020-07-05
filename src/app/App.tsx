import * as React from "react";

import { SearchClient } from "@screens";
import { Provider } from "react-redux";

import "./assets/main.css";

import { configureStore } from "@redux";

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SearchClient />
      </Provider>
    );
  }
}
