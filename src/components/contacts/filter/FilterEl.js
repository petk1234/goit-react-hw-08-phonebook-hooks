import { useDispatch } from "react-redux";
import styles from "../input/inputElStyles.module.scss";
import contactsActions from "../../../redux/contacts/contactsActions";
function FilterEl() {
  const dispatch = useDispatch();
  const handleChangeFilter = (e) => {
    dispatch(contactsActions.changeFilter(e.target.value));
  };
  return (
    <div className={styles.formElDiv}>
      <span className={styles.span}>Filter contacts you need: </span>
      <input
        className={styles.formElDivInput}
        onChange={handleChangeFilter}
      ></input>
    </div>
  );
}
export default FilterEl;
