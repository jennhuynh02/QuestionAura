import React from 'react';
import {
  Route, Link, HashRouter, Switch, Redirect,
} from 'react-router-dom';
import HeaderContainer from './header/header_container';
import WelcomePage from './sessions/welcome_page';
import SignUpPage from './sessions/sign_up_page';
import QuestionContainer from './questions/question_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={WelcomePage} />
      <AuthRoute exact path="/signup" component={SignUpPage} />
      <ProtectedRoute exact path="/" component={HeaderContainer} />
      <Route path="/question" component={QuestionContainer} />
    </Switch>
  </div>
);

export default App;
