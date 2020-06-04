export const fetchTopics = (data) => (
  $.ajax({
    method: 'GET',
    url: 'api/topics',
    data,
  })
);

export const fetchTopic = (topic) => (
  $.ajax({
    method: 'GET',
    url: `api/topics/${topic.id}`,
  })
);