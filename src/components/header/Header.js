import UserMenu from "../userMenu/UserMenu";
import NavLinks from "../nav/NavLinks";
import styles from "../../appStyles.module.scss";
function Header({ token }) {
  return (
    <>
      {token !== null && (
        <header>
          <div className={styles.headerContainer}>
            <NavLinks />
            {token !== null && <UserMenu />}
          </div>
        </header>
      )}
    </>
  );
}
export default Header;
