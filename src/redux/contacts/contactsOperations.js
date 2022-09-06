import contactsActions from "./contactsActions";
import axios from "axios";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";
const addContact = (name, number) => (dispatch, prevState) => {
  // dispatch(contactsActions.requestAddContact());
  const contacts = prevState().contactsInfo.contacts;
  const isAcceptedContactArr = contacts.filter(
    (contact) => `${contact.name}:${contact.number}` !== `${name}:${number}`
  );
  const isAcceptedContact = isAcceptedContactArr.length === contacts.length;
  if (isAcceptedContact) {
    dispatch(contactsActions.requestAddContact());
    axios
      .post("/contacts", { name: name, number: number })
      .then((data) => {
        console.log(data);
        dispatch(contactsActions.successAddContact(data.data));
      })
      .catch((error) => dispatch(contactsActions.failureAddContact()));
  } else {
    dispatch(contactsActions.failureAddContact("This contact already exists"));
  }
};

const getContacts = () => (dispatch) => {
  dispatch(contactsActions.requestGetContacts());
  axios
    .get("/contacts")
    .then((data) => {
      console.log(data);
      dispatch(contactsActions.successGetContacts(data.data));
    })
    .catch((error) => dispatch(contactsActions.failureGetContacts()));
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactsActions.requestRemoveContact());
  axios
    .delete(`contacts/${id}`)
    .then(() => dispatch(contactsActions.successRemoveContact(id)))
    .catch(() => dispatch(contactsActions.failureRemoveContact()));
};
export default { addContact, getContacts, removeContact };
