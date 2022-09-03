import { createAction } from "@reduxjs/toolkit";

const requestAddContact = createAction("contact/requestAddContact");
const successAddContact = createAction("contact/successAddContact");
const failureAddContact = createAction("contact/failureAddContact");

const requestGetContacts = createAction("contact/requestGetContacts");
const successGetContacts = createAction("contact/successGetContacts");
const failureGetContacts = createAction("contact/failureGetContacts");

const requestRemoveContact = createAction("contact/requestRemoveContact");
const successRemoveContact = createAction("contact/successRemoveContact");
const failureRemoveContact = createAction("contact/failureRemoveContact");

const changeFilter = createAction("contact/changeFilter");
const contactError = createAction("contact/contactError");
export default {
  requestAddContact,
  successAddContact,
  failureAddContact,

  requestGetContacts,
  successGetContacts,
  failureGetContacts,

  requestRemoveContact,
  successRemoveContact,
  failureRemoveContact,

  changeFilter,
  contactError,
};
