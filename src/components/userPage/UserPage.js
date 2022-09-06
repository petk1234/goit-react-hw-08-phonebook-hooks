import Button from "../button/Button";
import useLogout from "../../customHooks/useLogout";
import styles from "./userPage.module.scss";
import { useSelector } from "react-redux";
import defaultUserImg from "../../images/defaultUser.jpg";
export default function UserPage() {
  const { name, email } = useSelector((state) => state.auth.user);
  const handleLogOut = useLogout();
  return (
    <div className={styles.userPage}>
      <div className={styles.userCard}>
        <img className={styles.userImg} src={defaultUserImg} />
        <div className={styles.userInfoLine}>
          <h6 className={styles.userInfoLineTitle}>Name:</h6>
          <p className={styles.userInfoLineText}>{name}</p>
        </div>
        <div className={styles.userInfoLine}>
          <h6 className={styles.userInfoLineTitle}>Email:</h6>
          <p className={styles.userInfoLineText}>{email}</p>
        </div>
        <Button style={styles.userButton} operation={handleLogOut}>
          Logout
        </Button>
      </div>
    </div>
  );
}
