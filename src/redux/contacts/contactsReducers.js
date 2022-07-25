import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";
const contacts = createReducer([], {
  [contactsActions.successAddContact]: (state, { type, payload }) => [
    ...state,
    payload,
  ],
  [contactsActions.successGetContacts]: (state, { type, payload }) => payload,
  [contactsActions.successRemoveContact]: (state, { type, payload }) =>
    state.filter((contact) => contact.id !== payload),
});
const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, { type, payload }) => payload,
});
const isLoading = createReducer(false, {
  [contactsActions.requestAddContact]: () => true,
  [contactsActions.requestGetContacts]: () => true,
  [contactsActions.requestRemoveContact]: () => true,

  [contactsActions.successAddContact]: () => false,
  [contactsActions.successGetContacts]: () => false,
  [contactsActions.successRemoveContact]: () => false,

  [contactsActions.failureAddContact]: () => false,
  [contactsActions.failureGetContacts]: () => false,
  [contactsActions.failureRemoveContact]: () => false,
});
const rootReducerSecond = combineReducers({
  contacts: contacts,
  filter: filter,
  isLoading: isLoading,
});
export default rootReducerSecond;
