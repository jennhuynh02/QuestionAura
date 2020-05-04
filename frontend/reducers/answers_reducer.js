import {
  RECEIVE_ANSWERS, RECEIVE_ANSWER, DELETE_ANSWER,
} from '../actions/answer_actions';

const answersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ANSWERS:
      return action.answers;
    case RECEIVE_ANSWER:
      return { ...state, [action.answer.id]: action.answer };
    case DELETE_ANSWER: {
      const nextState = { ...state };
      delete nextState[action.answerId];
      return nextState;
    }
    default:
      return state;
  }
};

export default answersReducer;
