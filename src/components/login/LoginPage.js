import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import styles from "./login.module.scss";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(authOperations.loginUser(email, password));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Login form</h1>
      <form className={styles.formEl}>
        <div className={styles.inputsContainer}>
          <div className={styles.formElDiv}>
            <span className={styles.span}>Email</span>
            <input
              value={email}
              type="text"
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
          <button className={styles.formButton} onClick={handleLogin} />
        </div>
      </form>
    </div>
  );
}
export default LoginPage;
