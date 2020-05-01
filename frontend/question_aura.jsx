import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Root } from './components/root';
import {
  fetchQuestions, createQuestion, fetchQuestion, updateQuestion, deleteQuestion,
} from './actions/question_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.fetchQuestions = fetchQuestions;
  window.fetchQuestion = fetchQuestion;
  window.createQuestion = createQuestion;
  window.updateQuestion = updateQuestion;
  window.deleteQuestion = deleteQuestion;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
