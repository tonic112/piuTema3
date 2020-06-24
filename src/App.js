import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

class App extends Component {
  render() {
    return (
      <div>
        <div className="row" style={{ marginLeft: 30 }}>
          <BrowserRouter>
            <Redirect from="/" to="/login" />
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
