import { useSelector, useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import { useNavigate } from "react-router-dom";
import routes from "../routes";
import styles from "./userMenuStyles.module.scss";
function UserMenu() {
  let name = useSelector((state) => state.auth.user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = (e) => {
    navigate(`${routes.login}`);
    dispatch(authOperations.logoutUser());
  };
  return (
    <>
      {name !== undefined ? (
        <div className={styles.userContainer}>
          <p className={styles.p}>
            Hello, <span className={styles.span}>{name}</span>
          </p>
          <button className={styles.userButton} onClick={handleLogOut}></button>
        </div>
      ) : (
        <div className={styles.userContainer}>
          <p className={styles.p}>Hello, </p>
        </div>
      )}
    </>
  );
}
export default UserMenu;
