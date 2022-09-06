import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import authActions from "../../redux/auth/authActions";
import contactsActions from "../../redux/contacts/contactsActions";
import { Alert } from "reactstrap";
import styles from "./errorStyles.module.scss";
import { CSSTransition } from "react-transition-group";
import transitions from "./transition.module.scss";
function AuthError() {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  let [authError, contactError] = useSelector((state) => [
    state.auth.error,
    state.contactsInfo.error,
  ]);
  console.log(contactError);
  useEffect(() => {
    console.log("sss");
    if (authError !== "" || contactError !== "") {
      console.log("ss ss");
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 1000);
      setTimeout(() => {
        dispatch(authActions.setErrorNull());
        dispatch(contactsActions.failureAddContact(""));
      }, 2000);
    }
  }, [authError, contactError]);
  return (
    <>
      {(authError !== "" || contactError !== "") && (
        <CSSTransition
          in={show}
          appear={true}
          timeout={500}
          classNames={transitions}
          unmountOnExit
        >
          <Alert
            className={styles.error}
            color="danger"
            fade={false}
            transition={{ baseClassActive: "", timeout: 500 }}
            toggle={() => {
              setShow(false);
            }}
          >
            {authError || contactError}
          </Alert>
        </CSSTransition>
      )}
    </>
  );
}
export default AuthError;
