import * as React from "react";

import { SearchClient } from "@screens";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import "./assets/main.css";

import { configureStore } from "@redux";
import { lightTheme } from "@styles";

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <div style={{ width: "600px", margin: "auto" }}>
            <SearchClient />
          </div>
        </ThemeProvider>
      </Provider>
    );
  }
}
