import initialState from './initial-state';
 
 
export default function usersReducer (state = initialState, action) {  
        switch(action.type) {
             
            case "CHOOSE_USER":
                return {
                    ...state,
                    currenId: action.currenId
                }; 
             
            case "ADD_NEW_USER": 
                return {
                    ...state,
                    users: [...action.users]
                }; 
            
            case "DELETE_USERS":
                return {
                    ...state,
                    users: [...action.users]
                };
            
            case "EDIT_USER":
                return {
                    ...state,
                    users: [...action.users]
                };

            case "DELETE_USER":
                return {
                    ...state,
                    users: [...action.users]
                };

            case "ADD_NEW_BUTTON":
            break;
            
            case "ADD_HISTORY":
                return {
                    ...state,
                    users: [...action.users]
                };          
    
            case "DELETE_BUTTONS":
            break;
    
            case "CLEAR_HISTORY":
                return {
                    ...state,
                    users: [...action.users]
                };       
    
            default: return state;
        };
}

 