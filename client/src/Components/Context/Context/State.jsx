import React, { useReducer } from "react";
import uuid from "uuid";
import Context from "./Context";
import Reducer from "./Reducer";
import { v4 as uuidv4 } from "uuid";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../Types";

const State = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "simo1",
        email: "simo1@gmail.com",
        phone: "1111",
        type: "Personal"
      },
      {
        id: 2,
        name: "simo2",
        email: "simo2@gmail.com",
        phone: "2222",
        type: "Personal"
      }
    ],
    current: null
  };
  const [state, dispatch] = useReducer(Reducer, initialState);

  //Add Contact
  const addContact = contact => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //Delete Contact
  const deleteContact = cid => dispatch({ type: DELETE_CONTACT, payload: cid });
  //Set Curent Contact
  const setCurrent = contact =>
    dispatch({ type: SET_CURRENT, payload: contact });
  //Clear Current Contact
  const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });
  //Update Contact
  const updateContact = contact => dispatch({type: UPDATE_CONTACT, payload: contact})
  //Filter Contacts
  //Clear Filter

  return (
    <Context.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
        current: state.current,
        setCurrent,
        clearCurrent,
        updateContact
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
