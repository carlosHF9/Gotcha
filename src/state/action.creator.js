export function LoadUser(users) {
  return {
    type: "LOAD_USERS",
    users: users,
  };
}

export function IsLoading(condition) {
  return {
    type: "IS_LOADING",
    IsLoading: condition,
  };
}
