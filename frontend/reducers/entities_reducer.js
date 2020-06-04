import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import questionsReducer from './question_reducer';
import answersReducer from './answers_reducer';
import topicsReducer from './topics_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  questions: questionsReducer,
  answers: answersReducer,
  topics: topicsReducer,
});

export default entitiesReducer;
