import React from "react";

import { Route } from "react-router";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { HeroScreen } from "../components/HeroScreen/HeroScreen";
import { SearchScreen } from "../components/SearchScreen/SearchScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SearchScreen} />
          <Route exact path="/hero/:heroeId" component={HeroScreen} />
        </Switch>
      </div>
    </Router>
  );
};
