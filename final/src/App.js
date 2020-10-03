import React from "react";
import { Switch, Route } from "react-router";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/common/NavBar";
import CreateTipClass from "./components/CreateTipClass";
import UserProfileClass from "./components/UserProfileClass";
import CreateTipFunction from "./components/CreateTipFunction";
import UserProfileFunction from "./components/UserProfileFunction";

export default function App() {
  return (
    <div className="container-app">
      <NavBar />
      <Switch>
        <Route path="/create">
          <CreateTipClass />
        </Route>
        <Route path="/profile">
          <UserProfileClass userId="1" />
        </Route>
      </Switch>
    </div>
  );
}
