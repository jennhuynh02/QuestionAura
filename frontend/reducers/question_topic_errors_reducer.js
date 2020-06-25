import { RECEIVE_QUESTION_TOPIC_ERRORS, RECEIVE_QUESTION_TOPIC } from '../actions/question_topic_actions';

const subscriptionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTION_TOPIC_ERRORS:
      return action.errors;
    case RECEIVE_QUESTION_TOPIC:
      return [];
    default:
      return state;
  }
};

export default subscriptionErrorsReducer;
