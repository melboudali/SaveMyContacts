import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

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

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // SetAlert

  // RemoveAlert
  const removeAlert = () => {};
  // RegisterSuccess
  const registerSuccess = () => {};
  // RegisterFail
  const registerFail = () => {};
  // UserLoaded
  const userLoaded = () => {};
  // AuthError
  const authError = () => {};
  // LoginSuccess
  const loginSuccess = () => {};
  // LoginFail
  const loginFail = () => {};
  // Lougout
  const lougout = () => {};
  // ClearErrors
  const clearErrors = () => {};
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
