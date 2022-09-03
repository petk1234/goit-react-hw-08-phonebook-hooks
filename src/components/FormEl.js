import { Formik } from "formik";
import * as yup from "yup";
import styles from "./login/login.module.scss";
export default function FormEl({ operation, formType }) {
  console.log(formType);
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required email";
        } else if (!/^[A-Z0-9._%+-]+@/i.test(values.email)) {
          //   errors.email = "Invalid email address";
          errors.email = "Should contain @";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Should contan ending after @";
        }

        if (!values.password) {
          errors.password = "Required password";
        } else if (values.password.length < 7) {
          errors.password = "Min password length is 7";
        }

        if (formType === "register") {
          if (!values.name) {
            errors.name = "required name";
          } else if (values.name.length >= 15) {
            errors.name = "name max length = 15";
          }
        }
        return errors;
      }}
      onSubmit={(values) => {
        operation(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleBlur,
        /* and other goodies */
      }) => (
        <form className={styles.formEl} onSubmit={handleSubmit}>
          <div className={styles.inputsContainer}>
            {formType === "register" && (
              <>
                <div className={styles.formElDiv}>
                  <span className={styles.span}>Name</span>
                  <input
                    value={values.name}
                    type="text"
                    name="name"
                    className={styles.formElDivInput}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                </div>
                {errors.name && touched.name && <p>{errors.name}</p>}
              </>
            )}

            <div className={styles.formElDiv}>
              <span className={styles.span}>Email</span>
              <input
                value={values.email}
                type="text"
                name="email"
                className={styles.formElDivInput}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
            </div>
            {errors.email && touched.email && <p>{errors.email}</p>}
            <div className={styles.formElDiv}>
              <span className={styles.span}>Password</span>
              <input
                value={values.password}
                name="password"
                type="password"
                className={styles.formElDivInput}
                onChange={handleChange}
                onBlur={handleBlur}
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                // required
              ></input>
            </div>
            {errors.password && touched.password && <p>{errors.password}</p>}
          </div>
          <div className={styles.formElDivButton}>
            <button type="submit" className={styles.formButton} />
          </div>
        </form>
      )}
    </Formik>
  );
}
