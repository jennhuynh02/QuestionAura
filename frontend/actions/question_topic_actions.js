import * as APIUtil from '../util/question_topics_api_util';

import { fetchQuestions } from './question_actions';

export const RECEIVE_QUESTION_TOPICS = 'RECEIVE_QUESTION_TOPICS';
export const RECEIVE_QUESTION_TOPIC = 'RECEIVE_QUESTION_TOPIC';
export const DELETE_QUESTION_TOPIC = 'DELETE_QUESTION_TOPIC';
export const RECEIVE_QUESTION_TOPIC_ERRORS = 'RECEIVE_QUESTION_TOPIC_ERRORS';


export const receiveQuestionTopics = (questionTopics) => ({
  type: RECEIVE_QUESTION_TOPICS,
  questionTopics,
});

export const receiveQuestionTopic = (questionTopic) => ({
  type: RECEIVE_QUESTION_TOPIC,
  questionTopic,
});

export const destroyQuestionTopic = (questionTopicId) => ({
  type: DELETE_QUESTION_TOPIC,
  questionTopicId,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_QUESTION_TOPIC_ERRORS,
  errors,
});

export const fetchQuestionTopics = (questionTopics) => (dispatch) => (
  APIUtil.fetchQuestionTopics(questionTopics)
    .then((questionTopics) => (dispatch(receiveQuestionTopics(questionTopics))),
      (err) => (
        dispatch(receiveErrors(err.responseJSON))
      ))
);

export const createQuestionTopic = (questionTopic) => (dispatch) => (
  APIUtil.createQuestionTopic(questionTopic)
    .then(() => (dispatch(fetchQuestions())),
      (err) => (
        dispatch(receiveErrors(err.responseJSON))
      ))
);

export const fetchQuestionTopic = (questionTopic) => (dispatch) => (
  APIUtil.fetchQuestionTopic(questionTopic)
    .then((questionTopic) => (dispatch(receiveQuestionTopic(questionTopic))),
      (err) => (
        dispatch(receiveErrors(err.responseJSON))
      ))
);

export const updateQuestionTopic = (questionTopic) => (dispatch) => (
  APIUtil.updateQuestionTopic(questionTopic)
    .then((questionTopic) => (dispatch(receiveQuestionTopic(questionTopic))),
      (err) => (
        dispatch(receiveErrors(err.responseJSON))
      ))
);

export const deleteQuestionTopic = (questionTopic) => (dispatch) => (
  APIUtil.deleteQuestionTopic(questionTopic)
    .then(() => (dispatch(fetchQuestions())),
      (err) => (
        dispatch(receiveErrors(err.responseJSON))
      ))
);
