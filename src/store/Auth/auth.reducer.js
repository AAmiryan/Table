import * as types from "./../types";

const initialState = {
  isRegistered: localStorage.isRegistered ? JSON.parse(localStorage.isRegistered) : false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_REGISTERED_ACTION:
      console.log(action.payload,'action.payload');
      return {
        ...state,
        isRegistered:action.payload
      }
    default:
      return state;
  }
};

export default authReducer;
