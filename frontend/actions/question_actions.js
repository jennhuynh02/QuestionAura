import * as APIUtil from '../util/question_api_util';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTIONS';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';
export const DELETE_QUESTION = 'DELETE_QUESTION';

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTION,
  questions,
});

export const receiveQuestion = (question) => ({
  type: RECEIVE_QUESTION,
  question,
});

export const updateQuestion = (question) => ({
  type: UPDATE_QUESTION,
  question,
});

export const deleteQuestion = (question) => ({
  type: DELETE_QUESTION,
  question,
});

export const fetchQuestions = (questions) => (dispatch) => (
  APIUtil.fetchQuestions(questions)
    .then((questions) => dispatch(receiveQuestions(questions)))
);

export const createQuestion = (question) => (dispatch) => (
  APIUtil.createQuestion(question)
    .then((question) => dispatch(receiveQuestion(question)))
);

export const fetchQuestion = (question) => (dispatch) => (
  APIUtil.fetchQuestion(question)
    .then((question) => dispatch(receiveQuestion(question)))
);

export const editQuestion = (question) => (dispatch) => (
  APIUtil.updateQuestion(question)
    .then((question) => dispatch(updateQuestion(question)))
);

export const destroyQuestion = (question) => (dispatch) => (
  APIUtil.deleteQuestion(question)
    .then((question) => dispatch(deleteQuestion(question)))
);

// actions: fetchQuestions, createQuestion, fetchQuestion, editQuestion, destroyQuestion
