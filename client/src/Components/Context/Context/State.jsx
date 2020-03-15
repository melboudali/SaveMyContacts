import React, { useReducer } from "react";
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
  CLEAR_FILTER,
  SET_LOADING
} from "../Types";

const State = props => {
  const initialState = {
    contacts: [
      {
        id: "a26782e4-bcb4-45dc-8d5b-f38544518a66",
        name: "Boothe Strivens",
        email: "bstrivens0@edublogs.org",
        phone: "+62 144 288 2911",
        type: "Professional"
      },
      {
        id: "297e4c3d-fae7-4817-b09e-18b54678447f",
        name: "Starlene Dreier",
        email: "sdreier1@yahoo.co.jp",
        phone: "+63 749 266 9519",
        type: "Professional"
      },
      {
        id: "f2555756-46db-4c84-9e9a-77eb26b122da",
        name: "Jennilee Beacroft",
        email: "jbeacroft2@jugem.jp",
        phone: "+62 391 123 4441",
        type: "Personal"
      },
      {
        id: "b62b97e6-5e38-433b-8073-6fbe329b838f",
        name: "Katerine Gilligan",
        email: "kgilligan3@csmonitor.com",
        phone: "+86 635 968 6150",
        type: "Personal"
      },
      {
        id: "c832b873-112f-4106-89f2-0935221d081f",
        name: "Florinda Cowpe",
        email: "fcowpe4@csmonitor.com",
        phone: "+86 901 126 3165",
        type: "Professional"
      },
      {
        id: "0b5b1610-994d-469d-a2b3-7d78ca058950",
        name: "Thoma Hambelton",
        email: "thambelton5@ucoz.com",
        phone: "+51 236 687 1148",
        type: "Personal"
      },
      {
        id: "4f57ade5-e671-4799-83e9-3c07ff5d7d69",
        name: "Kelvin Springer",
        email: "kspringer6@hp.com",
        phone: "+57 940 251 7935",
        type: "Personal"
      },
      {
        id: "ad83505c-a040-420f-af83-a3c96e0c4ce7",
        name: "Xenia Vereker",
        email: "xvereker7@google.de",
        phone: "+46 207 230 3332",
        type: "Professional"
      },
      {
        id: "9490f852-6c29-4e8e-904a-8bed6acc2eda",
        name: "Storm Gillbey",
        email: "sgillbey8@issuu.com",
        phone: "+86 443 397 0201",
        type: "Professional"
      },
      {
        id: "ab9115d4-7cff-4867-b178-79c8df573a3c",
        name: "Innis Matfin",
        email: "imatfin9@ucoz.ru",
        phone: "+86 424 574 0427",
        type: "Professional"
      },
      {
        id: "874b40c9-97d9-4091-837d-7f42c65cbf64",
        name: "Welch Pavlenko",
        email: "wpavlenkoa@gizmodo.com",
        phone: "+54 586 161 3250",
        type: "Personal"
      },
      {
        id: "c92c5299-399c-4770-894d-8cf77eb23d28",
        name: "Lida Lamplugh",
        email: "llamplughb@nifty.com",
        phone: "+92 211 782 5575",
        type: "Professional"
      },
      {
        id: "eb3bd019-9a48-4c72-9ed7-ed0cc713745a",
        name: "Tiffanie Sentance",
        email: "tsentancec@smh.com.au",
        phone: "+86 602 600 7465",
        type: "Personal"
      },
      {
        id: "163bcb77-88d1-4295-8c77-d189905b4181",
        name: "Kassia Bento",
        email: "kbentod@wikimedia.org",
        phone: "+57 443 151 4519",
        type: "Professional"
      }
    ],
    current: null,
    filtered: null,
    loading: false
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
  const updateContact = contact =>
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  //Filter Contacts
  const filterContacts = text => {
    setLoading();
    setTimeout(() => {
      dispatch({ type: FILTER_CONTACTS, payload: text });
    }, 5000);
  };
  //Clear Filter
  const clearFilter = () => dispatch({ type: CLEAR_FILTER });
  //Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };
  return (
    <Context.Provider
      value={{
        contacts: state.contacts,
        addContact,
        loading: state.loading,
        deleteContact,
        current: state.current,
        setCurrent,
        clearCurrent,
        updateContact,
        filtered: state.filtered,
        filterContacts,
        clearFilter,
        setLoading
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
