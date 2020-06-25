export const fetchQuestionTopics = (data) => (
  $.ajax({
    method: 'GET',
    url: 'api/question_topics',
    data,
  })
);

export const fetchQuestionTopic = (questionTopic) => (
  $.ajax({
    method: 'GET',
    url: `api/question_topics/${questionTopic.id}`,
  })
);

export const createQuestionTopic = (questionTopic) => (
  $.ajax({
    method: 'POST',
    url: 'api/question_topics',
    data: { questionTopic },
  })
);

export const updateQuestionTopic = (questionTopic) => (
  $.ajax({
    method: 'PATCH',
    url: `api/question_topics/${questionTopic.id}`,
    data: { questionTopic },
  })
);

export const deleteQuestionTopic = ({ question_id, topic_id }) => (
  $.ajax({
    method: 'DELETE',
    url: 'api/question_topics/banana',
    data: { question_id, topic_id },
  })
);
