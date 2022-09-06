import { Link } from "react-router-dom";
import routes from "../routes";
import { useSelector } from "react-redux";
import navLinksStyles from "./navLinksStyles.module.scss";
import photo from "./icons/menu-burger.svg";
import { useState } from "react";
function NavLinks() {
  console.log(photo);
  const token = useSelector((state) => state.auth.token);
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(true);
    // setTimeout(() => {
    //   setActive(false);
    // }, 200);
  };
  return (
    <>
      {token !== null && (
        <div className={navLinksStyles.isPopOutImg}>
          <div
            className={navLinksStyles.clickController}
            // style={{ position: "absolute", height: "80%", width: "100%" }}
            // onClick={() => {
            //   setActive(false);
            // }}
            onMouseEnter={() => {
              setActive(false);
            }}
          ></div>
          <div className={navLinksStyles.popOutImg}>
            <div
              className={navLinksStyles.navLinkTail}
              // style={{
              //   width: "20px",
              //   height: "20px",
              //   top: "75%",
              //   left: "20px",
              //   position: "absolute",
              //   backgroundColor: "white",
              //   // borderRadius: "-10px",
              //   transform: "rotate( 45deg )",
              // }}
            ></div>
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
                    onClick={handleClick}
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
