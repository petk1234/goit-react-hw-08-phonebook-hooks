import { useState } from "react";
import contactsOperations from "../../../redux/contacts/contactsOperations";
import { useDispatch, useSelector } from "react-redux";
import styles from "./inputElStyles.module.scss";
import authActions from "../../../redux/auth/authActions";
import contactsActions from "../../../redux/contacts/contactsActions";
function InputEl() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [inputType, setInputType] = useState("");
  const contacts = useSelector((state) => state.contactsInfo.contacts);
  const dispatch = useDispatch();
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleFocus = (e) => {
    setInputType("");
  };
  const buttonClick = (e) => {
    e.preventDefault();
    let validInp = /^[+][0-9]+$/;
    const isAcceptedContactArr = contacts.filter(
      (contact) => `${contact.name}:${contact.number}` !== `${name}:${number}`
    );
    const isAcceptedContact = isAcceptedContactArr.length === contacts.length;
    if (
      name.length < 15 &&
      number.length <= 13 &&
      validInp.test(number) &&
      name.length > 0 &&
      number.length > 0 &&
      isAcceptedContact
    ) {
      dispatch(contactsOperations.addContact(name, number));
      setName("");
      setNumber("");
    } else if (!validInp.test(number) && number.length > 0) {
      dispatch(
        authActions.inputLengthError("Your input is incorrect, try another way")
      );
    } else if (
      (name.length === 0 && number.length > 0) ||
      (name.length === 0 && number.length === 0)
    ) {
      dispatch(contactsActions.contactError("Please fill this field"));
      setInputType("name");
    } else if (
      (name.length === 0 && number.length === 0) ||
      (name.length === 0 && number.length > 0)
    ) {
      dispatch(contactsActions.contactError("Please fill this field"));
      setInputType("number");
    } else {
      dispatch(authActions.inputLengthError("This contact already exists"));
    }
  };
  return (
    <>
      <h1>Add new contact</h1>
      <form className={styles.formEl}>
        <div className={styles.formElDiv}>
          {inputType === "name" && "gg wp"}
          <span className={styles.span}>Name: </span>
          <input
            className={styles.formElDivInput}
            onChange={handleChangeName}
            onFocus={handleFocus}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </div>
        <div className={styles.formElDiv}>
          {inputType === "number" && "gg wp"}
          <span className={styles.span}>Number: </span>
          <input
            className={styles.formElDivInput}
            onChange={handleChangeNumber}
            type="tel"
            onFocus={handleFocus}
            name="number"
            value={number}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
