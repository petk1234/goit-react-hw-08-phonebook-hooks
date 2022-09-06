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
      <div>
        <a href={`tel:${number}`}>
          <button
            className={styles.listElCallButton}
            // onClick={handleDelete}
          ></button>
        </a>
        <button
          className={styles.listElDeleteButton}
          value={id}
          onClick={handleDelete}
        ></button>
      </div>
    </li>
  );
}
export default ListEl;
