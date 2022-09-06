import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import InputEl from "./input/InputEl";
import ContactsList from "./contacts_list/ContactList";
import FilterEl from "./filter/FilterEl";
import contactsOperations from "../../redux/contacts/contactsOperations";
import Loader from "../loader/Loader";
import styles from "./contactsStyles.module.scss";
function ContactsPage() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.token);
  const isLoading = useSelector((state) => state.contactsInfo.isLoading);
  console.log(isAuthenticated);
  useEffect(() => {
    console.log("useEffect");
    dispatch(contactsOperations.getContacts());
  }, []);
  return (
    <div style={{ height: "100%" }}>
      {isLoading === true && <Loader />}
      <div className={styles.contactsContainer}>
        <InputEl />
        {/* <FilterEl /> */}
        <ContactsList>
          <FilterEl />
        </ContactsList>
        {/* {isLoading === true && <Loader />} */}
      </div>
    </div>
  );
}
export default ContactsPage;
