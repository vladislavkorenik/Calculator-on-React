export const addNewUsers = (username) => ({
  type: 'ADD_NEW_USER',
  username,
});

export const deleteAllUsers = () => ({
  type: 'DELETE_USERS',
  users: [],
});

export const chooseUser = (currentId) => ({
  type: 'CHOOSE_USER',
  currentId,
});

export const editUser = (userId) => ({
  type: 'EDIT_USER',
  userId,
});

export const deleteUser = (userId) => ({
  type: 'DELETE_USER',
  userId,
});

export const addHistory = (currentUser) => ({
  type: 'ADD_HISTORY',
  currentUser,
});

export const clearHistory = (currentUser) => ({
  type: 'ADD_HISTORY',
  currentUser,
});

export const deleteButtons = () => ({
  type: 'DELETE_BUTTONS',
});

export const addNewButton = (number) => ({
  type: 'ADD_NEW_BUTTON',
  number,
});
