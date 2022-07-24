import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";
const contacts = createReducer([], {
  [contactsActions.successAddContact]: (state, { type, payload }) => [
    ...state,
    payload,
  ],
  [contactsActions.succestGetContacts]: (state, { type, payload }) => payload,
  [contactsActions.successRemoveContact]: (state, { type, payload }) =>
    state.filter((contact) => contact.id !== payload),
});
const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, { type, payload }) => payload,
});
const rootReducerSecond = combineReducers({
  contacts: contacts,
  filter: filter,
});
export default rootReducerSecond;
