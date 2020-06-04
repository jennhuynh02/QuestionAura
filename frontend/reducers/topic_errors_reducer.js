import { RECEIVE_TOPIC_ERRORS, RECEIVE_TOPIC } from '../actions/topic_actions';

const topicErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOPIC_ERRORS:
      return action.errors;
    case RECEIVE_TOPIC:
      return [];
    default:
      return state;
  }
};

export default topicErrorsReducer;
