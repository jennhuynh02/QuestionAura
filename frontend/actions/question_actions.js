import * as APIUtil from '../util/question_api_util';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const RECEIVE_QUESTION_ERRORS = 'RECEIVE_QUESTION_ERRORS';


export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const receiveQuestion = (question) => ({
  type: RECEIVE_QUESTION,
  question,
});

export const destroyQuestion = (question) => ({
  type: DELETE_QUESTION,
  question,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_QUESTION_ERRORS,
  errors,
});

export const fetchQuestions = (questions) => (dispatch) => (
  APIUtil.fetchQuestions(questions)
    .then((questions) => (dispatch(receiveQuestions(questions))),
      (err) => (
        dispatch(receiveErrors(err.responseJSON))
      ))
);

export const createQuestion = (question) => (dispatch) => (
  APIUtil.createQuestion(question)
    .then((question) => (dispatch(receiveQuestion(question))),
      (err) => (
        dispatch(receiveErrors(err.responseJSON))
      ))
);

export const fetchQuestion = (question) => (dispatch) => (
  APIUtil.fetchQuestion(question)
    .then((question) => (dispatch(receiveQuestion(question))),
      (err) => (
        dispatch(receiveErrors(err.responseJSON))
      ))
);

export const updateQuestion = (question) => (dispatch) => (
  APIUtil.updateQuestion(question)
    .then((question) => (dispatch(receiveQuestion(question))),
      (err) => (
        dispatch(receiveErrors(err.responseJSON))
      ))
);

export const deleteQuestion = (question) => (dispatch) => (
  APIUtil.deleteQuestion(question)
    .then(() => (dispatch(destroyQuestion(question))),
      (err) => (
        dispatch(receiveErrors(err.responseJSON))
      ))
);

// actions: fetchQuestions, createQuestion, fetchQuestion, editQuestion, destroyQuestion
