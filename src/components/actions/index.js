export const addNewUsers = (arr) => {
    localStorage.setItem('users',JSON.stringify(arr));
    return {
        type: "ADD_NEW_USER",
        users: [...arr] 
    }
}

export const deleteAllUsers = () => {
    localStorage.setItem('users',JSON.stringify([]));
    return {
        type: "DELETE_USERS",
        users: []
    }
}

export const chooseUser = (currenId) => {
    localStorage.setItem('currentUser',currenId);
    return {
        type: "CHOOSE_USER",
        currenId
    }
}

export const editUser = (arr) => {
    localStorage.setItem('users',JSON.stringify(arr));
    return {
        type: "EDIT_USER",
        users: [...arr] 
    }
}

export const deleteUser = (arr) => {
    localStorage.setItem('users',JSON.stringify(arr));
    return {
        type: "DELETE_USER",
        users: [...arr] 
    }
}

export const addHistory = (arr) => {
    localStorage.setItem('users',JSON.stringify(arr));
    return {
        type: "ADD_HISTORY",
        users: [...arr] 
    }
}

export const clearHistory = (arr) => {
    localStorage.setItem('users',JSON.stringify(arr));
    return {
        type: "ADD_HISTORY",
        users: [...arr] 
    }
}

export const deleteButtons = (arr) => {
    localStorage.setItem('users',JSON.stringify(arr));
    return {
        type: "DELETE_BUTTONS",
        users: [...arr] 
    }
}

export const addNewButton = (arr) => {
    localStorage.setItem('users',JSON.stringify(arr));
    return {
        type: "ADD_NEW_BUTTON",
        users: [...arr] 
    }
}