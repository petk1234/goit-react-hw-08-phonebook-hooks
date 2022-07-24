import { useSelector } from "react-redux";
import ListEl from "../contact/ListEl";
import styles from "./contactsListStyles.module.scss";
import transitions from "./transition.module.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";
function ContactsList() {
  const contacts = useSelector((state) => state.contactsInfo.contacts);
  const filter = useSelector((state) => state.contactsInfo.filter);
  return (
    <div className={styles.contactsListContainer}>
      <h1 className={styles.title}>Contacts</h1>
      <TransitionGroup component={"ul"} className={styles.contactsList}>
        {contacts.map(
          (contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase()) && (
              <CSSTransition
                key={contact.id}
                classNames={transitions}
                timeout={500}
              >
                <ListEl
                  // key={contact.id}
                  name={contact.name}
                  number={contact.number}
                  id={contact.id}
                ></ListEl>
              </CSSTransition>
            )
        )}
      </TransitionGroup>
    </div>
  );
}
export default ContactsList;
