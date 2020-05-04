import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {
  fetchAnswers, fetchAnswer, createAnswer, updateAnswer, deleteAnswer,
} from './actions/answer_actions';

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
  window.fetchAnswers = fetchAnswers;
  window.fetchAnswer = fetchAnswer;
  window.createAnswer = createAnswer;
  window.updateAnswer = updateAnswer;
  window.deleteAnswer = deleteAnswer;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
