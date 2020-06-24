import {
  RECEIVE_QUESTIONS, RECEIVE_QUESTION, DELETE_QUESTION,
} from '../actions/question_actions';

const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION:
      return { [action.question.id]: action.question };
    case DELETE_QUESTION: {
      const nextState = { ...state };
      delete nextState[action.questionId];
      return nextState;
    }
    default:
      return state;
  }
};

export default questionsReducer;
