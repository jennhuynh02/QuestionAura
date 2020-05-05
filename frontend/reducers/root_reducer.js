import { combineReducers } from 'redux';
import { sessionReducer } from './session_reducer';
import entitiesReducer from './entities_reducer';
import questionsReducer from './question_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import answersReducer from './answers_reducer';
import usersReducer from './users_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  users: usersReducer,
  questions: questionsReducer,
  answers: answersReducer,
  errors: errorsReducer,
  ui: uiReducer,
});

export default rootReducer;
