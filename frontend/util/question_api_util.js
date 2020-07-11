export const fetchQuestions = (data) => (
  $.ajax({
    method: 'GET',
    url: 'api/questions',
    data,
  })
);

export const fetchQuestion = (questionId) => (
  $.ajax({
    method: 'GET',
    url: `api/questions/${questionId}`,
  })
);

export const createQuestion = (question) => (
  $.ajax({
    method: 'POST',
    url: 'api/questions',
    data: { question },
  })
);

export const updateQuestion = (question) => (
  $.ajax({
    method: 'PATCH',
    url: `api/questions/${question.id}`,
    data: { question },
  })
);

export const deleteQuestion = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/questions/${id}`,
  })
);
