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

const Reducer = (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false
      };

    case GET_CONTACTS_ERROR:
    case CONTACT_NOT_ADDED:
    case CONTACT_NOT_DELETED:
    case CONTACT_NOT_EDITED:
      return {
        ...state,
        contactAlert: { type: "alert", msg: action.payload }
      };

    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        contactAlert: { type: "success", msg: "Contact Added" }
      };

    case CLEAR_CONTACT_ALERT:
      return {
        ...state,
        contactAlert: null
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(c => c._id !== action.payload),
        contactAlert: { type: "success", msg: "Contact Deleted" }
      };

    case SET_CURRENT:
      return { ...state, current: action.payload };

    case CLEAR_CURRENT:
      return { ...state, current: null };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact._id === action.payload._id ? action.payload : contact
        ),
        contactAlert: { type: "success", msg: "Contact Edited" }
      };

    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter(contact => {
          const regEx = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regEx) || contact.email.match(regEx);
        })
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };

    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: null
      };
    default:
      return state;
  }
};

export default Reducer;
