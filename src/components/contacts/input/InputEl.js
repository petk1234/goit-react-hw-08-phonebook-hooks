import { useState } from "react";
import contactsOperations from "../../../redux/contacts/contactsOperations";
import { useDispatch, useSelector } from "react-redux";
import styles from "./inputElStyles.module.scss";
import Form from "../../Form";
function InputEl() {
  const dispatch = useDispatch();

  const buttonClick = (userFormInfo) => {
    const { name, phone } = userFormInfo;
    dispatch(contactsOperations.addContact(name, phone));
  };
  return (
    <div className={styles.formContainer}>
      <h1>Add new contact</h1>
      <Form operation={buttonClick} formType="contact" styles={styles}>
        Add
      </Form>
    </div>
  );
}
export default InputEl;
