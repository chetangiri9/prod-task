import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import SearchBar from "./SearchBar";
import Login from "./Login";
import history from "../history";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/Search" exact component={SearchBar} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
