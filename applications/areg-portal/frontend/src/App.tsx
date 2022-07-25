import React from "react";
import "./styles/style.less";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingTest from "./components/LandingTest";
import AntibodiesTable from "./components/AntibodiesTable";

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingTest} />
      <Route exact path="/list" component={AntibodiesTable} />
    </Switch>
  </BrowserRouter>
);

export default Main;
