import { useState, useEffect } from "react";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import styles from "./login.module.scss";
import routes from "../routes";
import returnImg from "../../images/return.png";
import Form from "../Form";
function LoginPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleLogin = (userFormInfo) => {
    const { email, password } = userFormInfo;
    dispatch(authOperations.loginUser(email, password));
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <Link className={styles.loginToHome} to={`${routes.home}`}>
          <img src={returnImg} />
        </Link>
        <h3>Login form</h3>
        <Form operation={handleLogin} formType="login" styles={styles}>
          Login
        </Form>
      </div>
      <p>
        Not registered yet? {<Link to={`${routes.register}`}>Register</Link>}{" "}
        now!
      </p>
      {isLoading === true && <Loader />}
    </div>
  );
}
export default LoginPage;
