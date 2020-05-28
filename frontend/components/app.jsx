import React from 'react';
import {
  Route, Link, HashRouter, Switch, Redirect,
} from 'react-router-dom';
import WelcomePage from './sessions/welcome_page';
import SignUpPage from './sessions/sign_up_page';
import QuestionContainer from './questions/question_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import DashboardContainer from './dashboard/dashboard_container';
import Modal from './modal/modal';
import QuestionPageContainer from './questions/question_page_container';
import CategoryPageContainer from './categories/category_page_container';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path="/login" component={WelcomePage} />
      <AuthRoute exact path="/signup" component={SignUpPage} />
      <ProtectedRoute exact path="/" component={DashboardContainer} />
      <ProtectedRoute path="/askquestion" component={QuestionContainer} />
      <ProtectedRoute path="/questions/:questionId" component={QuestionPageContainer} />
      <ProtectedRoute exact path="/category/:category" component={CategoryPageContainer} />
    </Switch>
  </div>
);

export default App;
