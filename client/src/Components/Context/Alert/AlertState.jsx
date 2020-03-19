import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";

import {
  SET_LOGIN_ALERT,
  SET_REGISTER_ALERT,
  REMOVE_LOGIN_ALERT,
  REMOVE_REGISTER_ALERT
} from "../Types";

const AlertState = props => {
  const initialState = { loginAlert: [], registerAlert: [] };
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // SetLogin Alet
  const setLoginAlert = (type, msg, timeout = 5000) => {
    const id = uuidv4();
    dispatch({ type: SET_LOGIN_ALERT, payload: { id, type, msg } });
    setTimeout(
      () => dispatch({ type: REMOVE_LOGIN_ALERT, payload: id }),
      timeout
    );
  };
  // SetRegister Alert then remove
  const setRegisterAlert = (type, msg, timeout = 5000) => {
    const id = uuidv4();
    dispatch({ type: SET_REGISTER_ALERT, payload: { id, type, msg } });
    setTimeout(
      () => dispatch({ type: REMOVE_REGISTER_ALERT, payload: id }),
      timeout
    );
  };

  return (
    <AlertContext.Provider
      value={{
        loginAlert: state.loginAlert,
        registerAlert: state.registerAlert,
        setRegisterAlert,
        setLoginAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
