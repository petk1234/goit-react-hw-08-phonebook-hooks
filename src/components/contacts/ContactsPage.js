import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import InputEl from "./input/InputEl";
import ContactsList from "./contacts_list/ContactList";
import FilterEl from "./filter/FilterEl";
import contactsOperations from "../../redux/contacts/contactsOperations";
import routes from "../routes";
import styles from "./contactsStyles.module.scss";
function ContactsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.token);
  console.log(isAuthenticated);
  useEffect(() => {
    console.log("useEffect");
    dispatch(contactsOperations.getContacts());
  }, []);
  return (
    <div className={styles.contactsContainer}>
      <InputEl></InputEl>
      <FilterEl></FilterEl>
      <ContactsList></ContactsList>
    </div>
  );
}
export default ContactsPage;
