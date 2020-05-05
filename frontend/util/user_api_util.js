export const fetchUsers = (data) => (
  $.ajax({
    method: 'GET',
    url: 'api/users',
    data,
  })
);

export const fetchUser = (user) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user.id}`,
  })
);
