import * as APIUtil from '../util/answer_api_util';

export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const DELETE_ANSWER = 'DELETE_ANSWER';
export const RECEIVE_ANSWER_ERRORS = 'RECEIVE_ANSWER_ERRORS';


export const receiveAnswers = (answers) => ({
  type: RECEIVE_ANSWERS,
  answers,
});

export const receiveAnswer = (answer) => ({
  type: RECEIVE_ANSWER,
  answer,
});

export const destroyAnswer = (answer) => ({
  type: DELETE_ANSWER,
  answer,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ANSWER_ERRORS,
  errors,
});

export const fetchAnswers = (answers) => (dispatch) => (
  APIUtil.fetchAnswers(answers)
    .then((answers) => (dispatch(receiveAnswers(answers))),
      (err) => (
        dispatch(receiveErrors(err.responseJSON))
      ))
);

export const createAnswer = (answer) => (dispatch) => (
  APIUtil.createAnswer(answer)
    .then((answer) => (dispatch(receiveAnswer(answer))),
      (err) => (
        dispatch(receiveErrors(err.responseJSON))
      ))
);

export const fetchAnswer = (answer) => (dispatch) => (
  APIUtil.fetchAnswer(answer)
    .then((answer) => (dispatch(receiveAnswer(answer))),
      (err) => (
        dispatch(receiveErrors(err.responseJSON))
      ))
);

export const updateAnswer = (answer) => (dispatch) => (
  APIUtil.updateAnswer(answer)
    .then((answer) => (dispatch(receiveAnswer(answer))),
      (err) => (
        dispatch(receiveErrors(err.responseJSON))
      ))
);

export const deleteAnswer = (answerId) => (dispatch) => (
  APIUtil.deleteAnswer(answerId)
    .then(() => (dispatch(destroyAnswer(answerId))))
);

// actions: fetchAnswers, createAnswer, fetchAnswer, updateAnswer, destroyAnswer
