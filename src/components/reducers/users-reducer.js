import initialState from './initial-state';
import isName from "../../logic/isName";
import isNumeric from "../../logic/isNumeric";
 
 
export default function usersReducer (state = initialState, action) {  
        switch(action.type) {
             
            case "CHOOSE_USER":
                localStorage.setItem('currentId',action.currentId);
                return {
                    ...state,
                    currentId: action.currentId
                }; 
             
            case "ADD_NEW_USER": {
                let arr = state.users;
                if(isName(action.username)) {
                    arr.push({
                        user: action.username,
                        button: [],
                        history: [],
                        id: `${action.username + Math.random()}`
                    });
                };

                localStorage.setItem('users',JSON.stringify(arr)); 
                return {
                    ...state,
                    users: [...arr]
                }; 
            }
            
            case "DELETE_USERS":
                return {
                    ...state,
                    users: [...action.users]
                };
            
            case "EDIT_USER": {
                let arr = state.users.map( el => {
                    if(el.id === action.userId) {
                        el.user = localStorage.getItem('enterValue');
                        el.id = `${localStorage.getItem('enterValue') + state.users.length}`
                    }
        
                    return el;
                } );
                localStorage.setItem('users',JSON.stringify(arr));
                localStorage.removeItem('enterValue');
                return {
                    ...state,
                    users: [...arr]
                };
            }

            case "DELETE_USER": {
                let arr = state.users.filter( el => el.id !== action.userId );
                localStorage.setItem('users',JSON.stringify(arr));
                return {
                    ...state,
                    users: [...arr]
                };
            }

            case "ADD_NEW_BUTTON": {
                let currentUser = state.users[state.users.findIndex( el => el.id === state.currentId)];
                let arr = state.users;
                if(isNumeric(action.number)) {
                    currentUser.button.push({
                        value: action.number,
                        item: action.number,
                        classes: 'number',
                    });

                    arr[arr.findIndex( el => el.id === state.currentId)] = currentUser;
                }; 
                localStorage.setItem('users',JSON.stringify(arr));
                return {
                    ...state,
                    users: [...arr]
                };
            }
            case "DELETE_BUTTONS": {
                let currentUser = state.users[state.users.findIndex( el => el.id === state.currentId)];
                let arr = state.users;
                currentUser.button = [];
                arr[arr.findIndex( el => el.id === state.currentId)] = currentUser;
                localStorage.setItem('users',JSON.stringify(arr));
                return {
                    ...state,
                    users: [...arr]
                };
            }
            
            case "ADD_HISTORY": {
                let arr = state.users;
                arr[arr.findIndex( el => el.id === state.currentId)] = action.currentUser;
                localStorage.setItem('users',JSON.stringify(arr));
                return {
                    ...state,
                    users: [...arr]
                };  
            }        
    
            case "CLEAR_HISTORY": {
                let arr = this.props.users;    
                arr[arr.findIndex( el => el.id === state.currentId)] = action.currentUser;
                localStorage.setItem('users',JSON.stringify(arr));
                return {
                    ...state,
                    users: [...arr]
                };     
            }
    
            default: return state;
        };
}

 