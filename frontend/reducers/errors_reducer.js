import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import questionErrorsReducer from './question_errors_reducer';
import answerErrorsReducer from './answer_errors_reducer';
import userErrorsReducer from './users_errors_reducer';
import topicErrorsReducer from './topic_errors_reducer';
import questionTopicErrorsReducer from './question_topic_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  question: questionErrorsReducer,
  answer: answerErrorsReducer,
  user: userErrorsReducer,
  topic: topicErrorsReducer,
  questionTopic: questionTopicErrorsReducer,
});

export default errorsReducer;
