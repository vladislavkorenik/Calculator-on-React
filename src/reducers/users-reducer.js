import initialState from "./initial-state";
import isName from "../logic/isName";
import isNumeric from "../logic/isNumeric";

export default function usersReducer(state = initialState, action) {
  let arr = state.users;
  let currentUser =
    state.users[state.users.findIndex(el => el.id === state.currentId)];

  switch (action.type) {
    case "CHOOSE_USER":
      localStorage.setItem("currentId", action.currentId);
      return {
        ...state,
        currentId: action.currentId
      };

    case "ADD_NEW_USER": {
      if (isName(action.username)) {
        arr.push({
          user: action.username,
          button: [],
          history: [],
          id: `${action.username + Math.random()}`
        });
      } else {
        alert("Неправильно введено имя или фамилия");
      }
      localStorage.setItem("users", JSON.stringify(arr));
      return {
        ...state,
        users: [...arr]
      };
    }

    case "DELETE_USERS":
      localStorage.setItem("users", JSON.stringify([]));
      return {
        ...state,
        users: [...action.users]
      };

    case "EDIT_USER": {
      arr = arr.map(el => {
        if (el.id === action.userId) {
          el.user =
            localStorage.getItem("enterValue") === null
              ? el.user
              : localStorage.getItem("enterValue");
          el.id = `${localStorage.getItem("enterValue") + Math.random()}`;
        }

        return el;
      });
      localStorage.setItem("users", JSON.stringify(arr));
      localStorage.removeItem("enterValue");
      return {
        ...state,
        users: [...arr]
      };
    }
    case "DELETE_USER": {
      arr = arr.filter(el => el.id !== action.userId);
      localStorage.setItem("users", JSON.stringify(arr));
      return {
        ...state,
        users: [...arr]
      };
    }
    case "ADD_NEW_BUTTON": {
      if (isNumeric(action.number)) {
        currentUser.button.push({
          value: parseInt(action.number),
          item: parseInt(action.number),
          classes: "number"
        });
        arr[arr.findIndex(el => el.id === state.currentId)] = currentUser;
      } else {
        alert("В следующий раз введите цифру");
      }
      localStorage.setItem("users", JSON.stringify(arr));
      return {
        ...state,
        users: [...arr]
      };
    }
    case "DELETE_BUTTONS": {
      currentUser.button = [];
      arr[arr.findIndex(el => el.id === state.currentId)] = currentUser;
      localStorage.setItem("users", JSON.stringify(arr));
      return {
        ...state,
        users: [...arr]
      };
    }

    case "ADD_HISTORY": {
      arr[arr.findIndex(el => el.id === state.currentId)] = action.currentUser;
      localStorage.setItem("users", JSON.stringify(arr));
      return {
        ...state,
        users: [...arr]
      };
    }

    case "CLEAR_HISTORY": {
      arr[arr.findIndex(el => el.id === state.currentId)] = action.currentUser;
      localStorage.setItem("users", JSON.stringify(arr));
      return {
        ...state,
        users: [...arr]
      };
    }

    default:
      return state;
  }
}
