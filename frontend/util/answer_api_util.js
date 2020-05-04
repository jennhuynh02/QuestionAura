export const fetchAnswers = (data) => (
  $.ajax({
    method: 'GET',
    url: 'api/answers',
    data,
  })
);

export const fetchAnswer = (answer) => (
  $.ajax({
    method: 'GET',
    url: `api/answers/${answer.id}`,
  })
);

export const createAnswer = (answer) => (
  $.ajax({
    method: 'POST',
    url: 'api/answers',
    data: { answer },
  })
);

export const updateAnswer = (answer) => (
  $.ajax({
    method: 'PATCH',
    url: `api/answers/${answer.id}`,
    data: { answer },
  })
);

export const deleteAnswer = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/answers/${id}`,
  })
);
