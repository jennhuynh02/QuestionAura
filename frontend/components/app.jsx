import React from 'react';
import { Route, Link, HashRouter, Switch, Redirect } from 'react-router-dom';
import HeaderContainer from "./header/header_container";
import WelcomePage from "../components/sessions/welcome_page";
// import SignUpPage from './sessions/sign_up_page';
import { AuthRoute, ProtectedRoute } from "../util/route_util";

export const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={WelcomePage} />
      {/* <AuthRoute exact path="/signup" component={SignUpPage} /> */}
      <ProtectedRoute exact path="/" component={HeaderContainer}/>
    </Switch>
  </div>
)