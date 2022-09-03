import { useState, useEffect } from "react";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import styles from "./login.module.scss";
import { Formik } from "formik";
import * as yup from "yup";
import FormEl from "../FormEl";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (userFormInfo) => {
    // e.preventDefault();
    const { email, password } = userFormInfo;
    dispatch(authOperations.loginUser(email, password));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {/* {isLoading === false ? ( */}
      <div className={styles.loginContainer}>
        <h1>Login form</h1>
        <FormEl operation={handleLogin} formType="login" />
        {/* <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required email";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.password) {
              errors.password = "Required password";
            } else if (values.password.length < 7) {
              errors.password = "Min password length is 7";
            }
            return errors;
          }}
          onSubmit={(values) => {
            handleLogin(values.email, values.password);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
          }) => (
            <form className={styles.formEl} onSubmit={handleSubmit}>
              <div className={styles.inputsContainer}>
                <div className={styles.formElDiv}>
                  <span className={styles.span}>Email</span>
                  <input
                    value={values.email}
                    type="text"
                    name="email"
                    className={styles.formElDivInput}
                    onChange={handleChange}
                  ></input>
                </div>
                {errors.email && <p>{errors.email}</p>}
                <div className={styles.formElDiv}>
                  <span className={styles.span}>Password</span>
                  <input
                    value={values.password}
                    name="password"
                    className={styles.formElDivInput}
                    onChange={handleChange}
                  ></input>
                </div>
                {errors.password && <p>{errors.password}</p>}
              </div>
              <div className={styles.formElDivButton}>
                <button type="submit" className={styles.formButton} />
              </div>
            </form>
          )}
        </Formik> */}
        {/* <form className={styles.formEl} onSubmit={handleLogin}>
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
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                required
              ></input>
            </div>
          </div>
          <div className={styles.formElDivButton}>
            <button className={styles.formButton} />
          </div>
        </form> */}
      </div>
      {/* ) : (
        <Loader />
      )} */}
    </>
  );
}
export default LoginPage;
