import React from 'react';
import { Route, Link, HashRouter, Switch } from 'react-router-dom';
import HeaderContainer from "./header/header_container";
import WelcomePage from "../components/sessions/welcome_page";

export const App = () => (
  <div>
    {/* <HeaderContainer /> */}
    <WelcomePage />
    <Switch>
      {/* <Route path="/login" component={LoginFormContainer} /> */}
    </Switch>
  </div>
)