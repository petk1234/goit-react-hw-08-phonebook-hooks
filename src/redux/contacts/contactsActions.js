import { createAction } from "@reduxjs/toolkit";

const requestAddContact = createAction("contact/requestAddContact");
const successAddContact = createAction("contact/successAddContact");
const failureAddContact = createAction("contact/failureAddContact");

const requestGetContacts = createAction("contact/requestGetContacts");
const succestGetContacts = createAction("contact/succestGetContacts");
const failureGetContacts = createAction("contact/failureGetContacts");

const requestRemoveContact = createAction("contact/requestRemoveContact");
const successRemoveContact = createAction("contact/successRemoveContact");
const failureRemoveContact = createAction("contact/failureRemoveContact");

const changeFilter = createAction("contact/changeFilter");
export default {
  requestAddContact,
  successAddContact,
  failureAddContact,

  requestGetContacts,
  succestGetContacts,
  failureGetContacts,

  requestRemoveContact,
  successRemoveContact,
  failureRemoveContact,

  changeFilter,
};
