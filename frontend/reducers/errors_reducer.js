import { combineReducers } from "redux";
import { sessionErrorsReducer } from "../reducers/session_errors_reducer";

export const errorsReducer = combineReducers({
  session: sessionErrorsReducer
})