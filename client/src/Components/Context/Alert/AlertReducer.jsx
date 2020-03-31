import {
  SET_LOGIN_ALERT,
  SET_REGISTER_ALERT,
  REMOVE_LOGIN_ALERT,
  REMOVE_REGISTER_ALERT,
  CLEAR_ALERTS
} from "../Types";

const AlertReducer = (state, action) => {
  switch (action.type) {
    case SET_LOGIN_ALERT:
      return { ...state, loginAlert: [...state.loginAlert, action.payload] };

    case SET_REGISTER_ALERT:
      return {
        ...state,
        registerAlert: [...state.registerAlert, action.payload]
      };

    case REMOVE_LOGIN_ALERT:
      return {
        ...state,
        loginAlert: state.loginAlert.filter(
          alert => alert.id !== action.payload
        )
      };

    case REMOVE_REGISTER_ALERT:
      return {
        ...state,
        registerAlert: state.registerAlert.filter(
          alert => alert.id !== action.payload
        )
      };

    case CLEAR_ALERTS:
      return {
        ...state,
        loginAlert: [],
        registerAlert: []
      };

    default:
      return state;
  }
};

export default AlertReducer;
