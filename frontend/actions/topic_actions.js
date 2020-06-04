import * as APIUtil from '../util/topics_api_util';

export const RECEIVE_TOPICS = "RECEIVE_TOPICS";
export const RECEIVE_TOPIC = "RECEIVE_TOPIC";
export const RECEIVE_TOPIC_ERRORS = "RECEIVE_TOPIC_ERRORS";

export const receiveTopics = (topics) => ({
  type: RECEIVE_TOPICS,
  topics,
});

export const receiveTopic = (topic) => ({
  type: RECEIVE_TOPIC,
  topic,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_TOPIC_ERRORS,
  errors,
});

export const fetchTopics = (topics) => (dispatch) => (
  APIUtil.fetchTopics(topics)
    .then((topics) => (dispatch(receiveTopics(topics))),
      (err) => (
        dispatch(receiveErrors(err.responseJSON))
      ))
);

export const fetchTopic = (topic) => (dispatch) => (
  APIUtil.fetchTopic(topic)
    .then((topic) => (dispatch(receiveTopics(topic))),
      (err) => (
        dispatch(receiveErrors(err.responseJSON))
      ))
);