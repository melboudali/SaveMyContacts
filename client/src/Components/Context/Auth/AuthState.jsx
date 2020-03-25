import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import setAuthToken from "../../../Utils/SetAuthToken";

import {
  SET_ALERT,
  REMOVE_ALERT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
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
  // Load User
  const loadUser = async () => {
    // @TODO: load Token into global header
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("/api/auth");
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.response.data.msg });
    }
  };
  // Login
  const login = async formData => {
    const config = {
      headers: { "Content-Type": "application/json" }
    };
    try {
      const res = await axios.post("api/auth", formData, config);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      loadUser();
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.msg });
    }
  };
  // Logout
  const logout = () => {
    dispatch({ type: LOGOUT });
  };
  //Register New User (REGISTER_SUCCESS/RGISTER_FAIL)
  const register = async formData => {
    const config = {
      headers: { "Content-Type": "application/json" }
    };
    try {
      const res = await axios.post("/api/users", formData, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      loadUser();
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.response.data.msg });
    }
  };

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
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        login,
        logout,
        register,
        clearErrors,
        loadUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
