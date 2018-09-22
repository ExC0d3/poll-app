import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import App from "./Components/App";
import Poll from "./Components/Poll";

/*
    Render the root component.
    It receives the store prop.
    We use Provider from react-redux
    which wraps the Router enabling all the children
    and grandchilren to access the store.
*/
const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route strict exact path="/" component={App} />
        <Route strict exact path="/poll" component={Poll} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
