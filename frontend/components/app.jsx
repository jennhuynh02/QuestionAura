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
import TopicsPageContainer from './topics/topics_page_container';
import TopicsContainer from './topics/topics_container';
import HeaderContainer from './header/header_container';

const App = () => (
  <div>
    <Modal />
    <HeaderContainer />
    <Switch>
      <AuthRoute exact path="/login" component={WelcomePage} />
      <AuthRoute exact path="/signup" component={SignUpPage} />
      <ProtectedRoute exact path="/" component={DashboardContainer} />
      <ProtectedRoute path="/askquestion" component={QuestionContainer} />
      <ProtectedRoute path="/questions/:questionId" component={QuestionPageContainer} />
      <ProtectedRoute exact path="/category/:category" component={CategoryPageContainer} />
      <ProtectedRoute exact path="/topics" component={TopicsContainer} />
      <ProtectedRoute exact path="/topics/:topic" component={TopicsPageContainer} />
    </Switch>
  </div>
);

export default App;
