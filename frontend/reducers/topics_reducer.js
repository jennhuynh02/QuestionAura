import { RECEIVE_TOPICS } from "../actions/topic_actions";

const topicsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOPICS:
      return action.topics;
    default:
      return state;
  }
};

export default topicsReducer;
