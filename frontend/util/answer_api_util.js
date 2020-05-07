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

export const createAnswer = (formData) => {
  return $.ajax({
    method: 'POST',
    url: 'api/answers',
    data: formData,
    contentType: false,
    processData: false,
  });
};

export const updateAnswer = (formData) => (
  $.ajax({
    method: 'PATCH',
    url: `api/answers/${formData.get('answer[id]')}`,
    data: formData,
    contentType: false,
    processData: false,
  })
);

export const deleteAnswer = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/answers/${id}`,
  })
);
