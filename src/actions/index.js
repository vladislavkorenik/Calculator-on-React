export const addNewUsers = (username) => {
    return {
        type: "ADD_NEW_USER",
        username
    }
}

export const deleteAllUsers = () => {
    return {
        type: "DELETE_USERS",
        users: []
    }
}

export const chooseUser = (currentId) => {
    return {
        type: "CHOOSE_USER",
        currentId
    }
}

export const editUser = (userId) => {
    return {
        type: "EDIT_USER",
        userId
    }
}

export const deleteUser = (userId) => {
    return {
        type: "DELETE_USER",
        userId
    }
}

export const addHistory = (currentUser) => {
    return {
        type: "ADD_HISTORY",
        currentUser 
    }
}

export const clearHistory = (currentUser) => {
    return {
        type: "ADD_HISTORY",
        currentUser
    }
}

export const deleteButtons = () => {
    return {
        type: "DELETE_BUTTONS"
    }
}

export const addNewButton = (number) => {
    return {
        type: "ADD_NEW_BUTTON",
        number
    }
}