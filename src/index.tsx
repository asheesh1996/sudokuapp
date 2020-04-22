import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { FluentCustomizations } from "@uifabric/fluent-theme";
import { Customizer, mergeStyles } from "office-ui-fabric-react";
import * as serviceWorker from "./core/index";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles";

import { PersistGate } from "redux-persist/integration/react";

import { Content, Title, Card, Grid, Numbers, NewButton } from "./components";

const { persistor, store } = serviceWorker.configureStore();

// Inject some global styles
mergeStyles({
  selectors: {
    ":global(body), :global(html), :global(#root)": {
      margin: 0,
      padding: 0,
      height: "100vh",
    },
  },
});
ReactDOM.render(
  <Customizer {...FluentCustomizations}>
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Content>
            <Title>SUDOKU</Title>
            <Card>
              <NewButton></NewButton>
              <Grid></Grid>
              <Numbers></Numbers>
            </Card>
          </Content>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </Customizer>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
