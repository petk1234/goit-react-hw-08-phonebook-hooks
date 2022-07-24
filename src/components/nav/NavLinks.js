import { Link } from "react-router-dom";
import routes from "../routes";
import { useSelector } from "react-redux";
import navLinksStyles from "./navLinksStyles.module.scss";
import photo from "./icons/menu-burger.svg";
function NavLinks() {
  console.log(photo);
  const token = useSelector((state) => state.auth.token);
  return (
    <div className={token !== null ? navLinksStyles.isPopOutImg : ""}>
      {token !== null && <div className={navLinksStyles.popOutImg}></div>}
      <div
        className={
          token === null
            ? navLinksStyles.menuDisabled
            : navLinksStyles.menuAbled
        }
      >
        <Link className={navLinksStyles.navLink} to={`${routes.home}`}>
          Home
        </Link>
        {token === null ? (
          <>
            <Link className={navLinksStyles.navLink} to={`${routes.login}`}>
              Login
            </Link>
            <Link className={navLinksStyles.navLink} to={`${routes.register}`}>
              Register
            </Link>
          </>
        ) : (
          <Link className={navLinksStyles.navLink} to={`${routes.contacts}`}>
            Contacts
          </Link>
        )}
      </div>
    </div>
  );
}
export default NavLinks;
