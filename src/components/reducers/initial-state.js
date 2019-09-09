const initialState = {
    users: JSON.parse(localStorage.getItem('users')) === null ? [] : JSON.parse(localStorage.getItem('users')),
    currenId: localStorage.getItem('currentUser') === null ? '' : localStorage.getItem('currentUser')
}

export default initialState;