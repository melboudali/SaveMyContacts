import {
  SET_ALERT,
  REMOVE_ALERT,
  REGISTER_SUCCESS,
  RGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../Types";

const AuthReducer = (state, action) => {
    switch (action.type) {
        case SET_ALERT:
          return { ...state };
        case REMOVE_ALERT:
          return { ...state };
        default:
          return state;
      }
}

export default AuthReducer
