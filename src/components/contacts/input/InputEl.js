import { useState } from "react";
import contactsOperations from "../../../redux/contacts/contactsOperations";
import { useDispatch } from "react-redux";
import styles from "./inputElStyles.module.scss";
import contactsActions from "../../../redux/contacts/contactsActions";
import authActions from "../../../redux/auth/authActions";
function InputEl() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };
  const buttonClick = (e) => {
    e.preventDefault();
    if (name.length < 15 && number.length < 11) {
      dispatch(contactsOperations.addContact(name, number));
      setName("");
      setNumber("");
    } else {
      dispatch(authActions.inputLengthError());
    }
  };
  return (
    <>
      <h1>Add new contact</h1>
      <form className={styles.formEl}>
        <div className={styles.formElDiv}>
          <span className={styles.span}>Name: </span>
          <input
            className={styles.formElDivInput}
            onChange={handleChangeName}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </div>
        <div className={styles.formElDiv}>
          <span className={styles.span}>Number: </span>
          <input
            className={styles.formElDivInput}
            onChange={handleChangeNumber}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
        </div>
        <button
          className={styles.formElDivButton}
          onClick={buttonClick}
        ></button>
      </form>
    </>
  );
}
export default InputEl;
