export const userInitialState = {
  userState: {
    loggedIn: false
  }
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        loggedIn: true
      };
    case 'LOAD_INTIAL': 
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
};