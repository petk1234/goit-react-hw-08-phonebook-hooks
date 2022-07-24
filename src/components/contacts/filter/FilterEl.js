import { useDispatch } from "react-redux";
// import { useState } from "react";
import styles from "../input/inputElStyles.module.scss";
import contactsActions from "../../../redux/contacts/contactsActions";
function FilterEl() {
  //   const [filter, setFilter] = us
  const dispatch = useDispatch();
  const handleChangeFilter = (e) => {
    dispatch(contactsActions.changeFilter(e.target.value));
  };
  return (
    <div className={styles.formElDiv}>
      <span className={styles.span}>Filter: </span>
      <input
        className={styles.formElDivInput}
        onChange={handleChangeFilter}
      ></input>
    </div>
  );
}
export default FilterEl;
