import authOperations from "../../redux/auth/authOperations";
import { useState } from "react";
import Loader from "../loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import styles from "./register.module.scss";
import authActions from "../../redux/auth/authActions";
function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = useSelector((state) => state.auth.isLoading);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("clicked: register");
    if (name.length < 15) {
      dispatch(authOperations.registerUser(name, email, password));
      setName("");
      setEmail("");
      setPassword("");
    } else {
      dispatch(authActions.inputLengthError());
    }
  };
  return (
    <>
      {isLoading === false ? (
        <div className={styles.registerContainer}>
          <h1>Register form</h1>
          <form className={styles.formEl}>
            <div className={styles.inputsContainer}>
              <div className={styles.formElDiv}>
                <span className={styles.span}>Name</span>
                <input
                  value={name}
                  className={styles.formElDivInput}
                  onChange={handleName}
                ></input>
              </div>
              <div className={styles.formElDiv}>
                <span className={styles.span}>Email</span>
                <input
                  value={email}
                  className={styles.formElDivInput}
                  onChange={handleEmail}
                ></input>
              </div>
              <div className={styles.formElDiv}>
                <span className={styles.span}>Password</span>
                <input
                  value={password}
                  className={styles.formElDivInput}
                  onChange={handlePassword}
                ></input>
              </div>
            </div>
            <div className={styles.formElDivButton}>
              <button className={styles.formButton} onClick={handleRegister} />
            </div>
          </form>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
export default RegisterPage;
