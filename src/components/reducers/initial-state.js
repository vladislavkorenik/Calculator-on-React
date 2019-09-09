const initialState = {
    users: JSON.parse(localStorage.getItem('users')) === null ? [] : JSON.parse(localStorage.getItem('users')),
    currenId: ''
}

export default initialState;