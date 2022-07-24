import contactsOperations from "../../../redux/contacts/contactsOperations";
import { useDispatch } from "react-redux";
import styles from "./listElStyles.module.scss";
function ListEl(props) {
  let { name, number, id } = props;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(contactsOperations.removeContact(id));
  };
  return (
    <li className={styles.listEl}>
      <div className={styles.listElDiv}>
        <p className={styles.p}>{`${name}: ${number}`}</p>
      </div>
      <button
        className={styles.listElButton}
        value={id}
        onClick={handleDelete}
      ></button>
    </li>
  );
}
export default ListEl;
