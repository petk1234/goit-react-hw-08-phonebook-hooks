import { Formik } from "formik";
import FormEl from "./FormEl";
export default function Form({ operation, formType, styles, children }) {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", phone: "" }}
      validate={(values, touched) => {
        const errors = {};
        if (formType === "register" || formType === "login") {
          if (!values.email) {
            errors.email = "Required email";
          } else if (!/^[A-Z0-9._%+-]+@/i.test(values.email)) {
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
        }
        if (formType === "register" || formType === "contact") {
          if (!values.name) {
            errors.name = "required name";
          } else if (values.name.length >= 15) {
            errors.name = "name max length = 15";
          }
        }
        if (formType === "contact") {
          if (!values.phone) {
            errors.phone = "required phone";
          } else if (!/^[+][0-9]+$/.test(values.phone)) {
            errors.phone = "invalid phone number";
          } else if (values.phone.length > 13) {
            errors.phone = "max length is 13 symbols";
          }
        }
        return errors;
      }}
      onSubmit={(values, { setTouched }) => {
        operation(values);
        values.name = "";
        values.email = "";
        values.password = "";
        values.phone = "";
        setTouched({});
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleBlur,
      }) => (
        <form className={styles.formEl} onSubmit={handleSubmit}>
          <div className={styles.inputsContainer}>
            {(formType === "register" || formType === "contact") && (
              <FormEl
                styles={styles}
                type="text"
                name="name"
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
            )}
            {(formType === "register" || formType === "login") && (
              <>
                <FormEl
                  styles={styles}
                  type="text"
                  name="email"
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
                <FormEl
                  styles={styles}
                  type="password"
                  name="password"
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
              </>
            )}
            {formType === "contact" && (
              <FormEl
                styles={styles}
                type="tel"
                name="phone"
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
            )}
          </div>
          <div className={styles.formElDivButton}>
            <button type="submit" className={styles.formButton}>
              {children}
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}
