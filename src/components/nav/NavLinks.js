import { Link } from "react-router-dom";
import routes from "../routes";
import { useSelector } from "react-redux";
import navLinksStyles from "./navLinksStyles.module.scss";
import { useState } from "react";
function NavLinks() {
  const token = useSelector((state) => state.auth.token);
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(true);
  };
  return (
    <>
      {token !== null && (
        <div className={navLinksStyles.isPopOutImg}>
          <div
            className={navLinksStyles.clickController}
            onMouseEnter={() => {
              setActive(false);
            }}
          />
          <div className={navLinksStyles.popOutImg}>
            <div
              className={
                isActive
                  ? navLinksStyles.menuDisabled
                  : navLinksStyles.navLinkTail
              }
            />
            <div
              className={
                isActive
                  ? navLinksStyles.menuDisabled
                  : navLinksStyles.menuAbled
              }
            >
              {token === null ? (
                <>
                  <Link
                    className={navLinksStyles.navLink}
                    to={`${routes.home}`}
                  >
                    Home
                  </Link>
                  <Link
                    className={navLinksStyles.navLink}
                    to={`${routes.login}`}
                  >
                    Login
                  </Link>
                  <Link
                    className={navLinksStyles.navLink}
                    to={`${routes.register}`}
                  >
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <div className={navLinksStyles.navLinkDiv}>
                    <Link
                      className={navLinksStyles.navLink}
                      to={`${routes.contacts}`}
                      onClick={handleClick}
                    >
                      Contacts
                    </Link>
                  </div>
                  <div className={navLinksStyles.navLinkDiv}>
                    <Link
                      className={navLinksStyles.navLink}
                      to={routes.profile}
                      onClick={handleClick}
                    >
                      Profile
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default NavLinks;
