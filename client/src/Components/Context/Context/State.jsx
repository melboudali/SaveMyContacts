import React, { useReducer } from "react";
import Context from "./Context";
import Reducer from "./Reducer";
import axios from "axios";

import {
  GET_CONTACTS,
  GET_CONTACTS_ERROR,
  CLEAR_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_NOT_ADDED,
  CONTACT_NOT_EDITED,
  CONTACT_NOT_DELETED,
  CLEAR_CONTACT_ALERT
} from "../Types";

const State = props => {
  const initialState = {
    contacts: null,
    contactAlert: null,
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // Get Contacts By token
  const getContacts = async () => {
    try {
      const res = await axios.get("/api/contacts");
      dispatch({ type: GET_CONTACTS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_CONTACTS_ERROR, payload: error.response.msg });
    }
    setTimeout(() => {
      dispatch({ type: CLEAR_CONTACT_ALERT });
    }, 3000);
  };

  //Add Contact
  const addContact = async contact => {
    const config = {
      headers: { "Content-Type": "application/json" }
    };
    try {
      const res = await axios.post("/api/contacts", contact, config);
      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (error) {
      dispatch({ type: CONTACT_NOT_ADDED, payload: error.response.msg });
    }
    setTimeout(() => {
      dispatch({ type: CLEAR_CONTACT_ALERT });
    }, 3000);
  };

  //Update Contact
  const updateContact = async contact => {
    const config = {
      headers: { "Content-Type": "application/json" }
    };
    try {
      const res = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );
      dispatch({ type: UPDATE_CONTACT, payload: res.data });
    } catch (error) {
      dispatch({ type: CONTACT_NOT_EDITED, payload: error.response.msg });
    }
    setTimeout(() => {
      dispatch({ type: CLEAR_CONTACT_ALERT });
    }, 3000);
  };

  //Delete Contact
  const deleteContact = async cid => {
    try {
      await axios.delete(`api/contacts/${cid}`);
      dispatch({ type: DELETE_CONTACT, payload: cid });
    } catch (error) {
      dispatch({ type: CONTACT_NOT_DELETED, payload: error.response.msg });
    }
    setTimeout(() => {
      dispatch({ type: CLEAR_CONTACT_ALERT });
    }, 3000);
  };

  //Set Curent Contact
  const setCurrent = contact =>
    dispatch({ type: SET_CURRENT, payload: contact });

  //Clear Current Contact
  const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

  //Filter Contacts
  const filterContacts = text =>
    dispatch({ type: FILTER_CONTACTS, payload: text });

  //Clear Filter
  const clearFilter = () => dispatch({ type: CLEAR_FILTER });

  // Clear Contacts
  const clearContacts = () => dispatch({ type: CLEAR_CONTACTS });

  return (
    <Context.Provider
      value={{
        contacts: state.contacts,
        contactAlert: state.contactAlert,
        addContact,
        getContacts,
        deleteContact,
        current: state.current,
        setCurrent,
        clearCurrent,
        updateContact,
        filtered: state.filtered,
        filterContacts,
        clearFilter,
        clearContacts
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
