import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import questionsReducer from "./question_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  questions: questionsReducer,
});

export default entitiesReducer;
