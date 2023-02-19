import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Client from "../pages/Client";
import ServiceProvider from "../pages/ServiceProvider";

function Account() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/account" exact component={ServiceProvider} />
          <Route path="/account" exact component={Client} />
        </Switch>
      </Router>
    </div>
  );
}

export default Account;
