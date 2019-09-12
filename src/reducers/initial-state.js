const initialState = {
    users: JSON.parse(localStorage.getItem('users')) === null ? [] : JSON.parse(localStorage.getItem('users')),
    currentId: localStorage.getItem('currentId') === null ? '' : localStorage.getItem('currentId')
}

export default initialState;