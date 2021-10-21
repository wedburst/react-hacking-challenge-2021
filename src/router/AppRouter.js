import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ArmaPlan } from "../components/ArmaPlan";
import { Header } from "../components/Header";
import { WelcomeScreen } from "../components/WelcomeScreen";
import RimacHome from "../RimacHome";

export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={RimacHome} />
        <Route exact path="/armaplan" component={ArmaPlan} />
        <Route exact path="/bienvenido" component={WelcomeScreen} />

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
