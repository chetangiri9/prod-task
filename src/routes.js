import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "./history";
import Login from "./containers/Login";
import Search from "./containers/SearchBar";
import ViewFavorites from "./containers/ViewFavorites";
import { message } from "antd";

const ProtectRoute = ({ Component }) => {
  const { authorised } = window.localStorage;
  if (authorised) {
    return <Component />;
  } else {
    message.error("Unauthorised");
    return <Redirect to="/" />;
  }
};

const SearchComponent = () => <ProtectRoute Component={Search} />;
const FavoritesComponent = () => <ProtectRoute Component={ViewFavorites} />;

export default () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/Search" exact component={SearchComponent} />
      <Route path="/favorites" exact component={FavoritesComponent} />
    </Switch>
  </Router>
);
