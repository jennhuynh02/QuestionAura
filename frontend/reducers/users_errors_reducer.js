import { RECEIVE_USER, RECEIVE_USER_ERRORS } from '../actions/user_action';

const userErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case RECEIVE_USER:
      return [];
    default:
      return state;
  }
};

export default userErrorsReducer;
