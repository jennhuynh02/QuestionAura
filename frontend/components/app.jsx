import React from 'react';
import { Route, Link, HashRouter, Switch } from 'react-router-dom';
import HeaderContainer from "./header/header_container";
import LoginFormContainer from "../components/sessions/login_container";

export const App = () => (
  <div>
    <HeaderContainer />
    <LoginFormContainer />
    <Switch>
      {/* <Route path="/login" component={LoginFormContainer} /> */}
    </Switch>
  </div>
)