import React, { useReducer } from "react";
import uuid from "uuid";
import Context from "./Context";
import Reducer from "./Reducer";

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
        type: "personal"
      },
      {
        id: 2,
        name: "simo2",
        email: "simo2@gmail.com",
        phone: "2222",
        type: "personal"
      },
      {
        id: 3,
        name: "simo3",
        email: "simo3@gmail.com",
        phone: "3333",
        type: "personal"
      },
      {
        id: 4,
        name: "simo4",
        email: "simo4@gmail.com",
        phone: "4444",
        type: "personal"
      }
    ]
  };
  const [state, dispatch] = useReducer(Reducer, initialState);

  //Add Contact
  //Delete Contact
  //Set Curent Contact
  //Clear Current Contact
  //Update Contact
  //Filter Contacts
  //Clear Filter

  return (
    <Context.Provider values={{ contacts: state.contacts }}>
      {props.children}
    </Context.Provider>
  );
};

export default State;
