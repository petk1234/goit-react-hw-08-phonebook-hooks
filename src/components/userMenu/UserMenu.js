import { useSelector } from "react-redux";
import Button from "../button/Button";
import useLogout from "../../customHooks/useLogout";
import styles from "./userMenuStyles.module.scss";
function UserMenu() {
  let name = useSelector((state) => state.auth.user.name);
  const handleLogOut = useLogout();
  return (
    <>
      {name !== undefined ? (
        <div className={styles.userContainer}>
          <p className={styles.p}>
            Hello, <span className={styles.span}>{name}</span>
          </p>
          <Button style={styles.userButton} operation={handleLogOut}></Button>
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
