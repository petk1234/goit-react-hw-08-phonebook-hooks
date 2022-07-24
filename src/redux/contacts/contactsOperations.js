import contactsActions from "./contactsActions";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
const addContact = (name, number) => (dispatch) => {
  dispatch(contactsActions.requestAddContact());
  axios
    .post("/contacts", { name: name, number: number })
    .then((data) => {
      console.log(data);
      dispatch(contactsActions.successAddContact(data.data));
    })
    .catch((error) => dispatch(contactsActions.failureAddContact()));
};

const getContacts = () => (dispatch) => {
  dispatch(contactsActions.requestGetContacts());
  axios
    .get("/contacts")
    .then((data) => {
      console.log(data);
      dispatch(contactsActions.succestGetContacts(data.data));
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
