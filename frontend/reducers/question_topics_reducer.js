import { RECEIVE_QUESTION_TOPICS, RECEIVE_QUESTION_TOPIC, DELETE_QUESTION_TOPIC } from "../actions/question_topic_actions";

const questionTopicReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTION_TOPICS:
      return action.question_topics;
    case RECEIVE_QUESTION_TOPIC:
      return { ...state, [action.questionTopic.id]: action.questionTopic };
    case DELETE_QUESTION_TOPIC: {
      const nextState = { ...state };
      delete nextState[action.questionTopicId.id];
      return nextState;
    }
    default:
      return state;
  }
};


export default questionTopicReducer;
